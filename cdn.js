import fs from "fs";
import path from "path";
import mime from "mime-types";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NodeHttpHandler } from "@smithy/node-http-handler";

import 'dotenv/config';

const bucketAccessKeyId = process.env.CLOUDFLARE_R2_ACCESS_KEY;
const bucketSecretAccessKey = process.env.CLOUDFLARE_R2_SECRET_KEY;
const bucketEndpoint = process.env.CLOUDFLARE_R2_ENDPOINT;
const bucketName = process.env.CLOUDFLARE_R2_BUCKET;

if (!bucketName) {
    throw new Error("CLOUDFLARE_R2_BUCKET environment variable is required");
}

const s3Client = new S3Client({
    region: "auto",
    endpoint: bucketEndpoint,
    credentials: {
        accessKeyId: bucketAccessKeyId,
        secretAccessKey: bucketSecretAccessKey,
    },
    requestHandler: new NodeHttpHandler({
        connectionTimeout: 10000, // 10 seconds
        socketTimeout: 10000,     // 10 seconds
  }),
});

// Recursively walk directory
function getAllFiles(dirPath, arrayOfFiles = [], basePath = dirPath) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getAllFiles(fullPath, arrayOfFiles, basePath);
        } else {
            const relativePath = path.relative(basePath, fullPath);
            arrayOfFiles.push(relativePath);
        }
    });

    return arrayOfFiles;
}

// Upload function for a specific directory
async function uploadDirectory(localDirectory, s3Prefix) {
    if (!fs.existsSync(localDirectory)) {
        console.log(`⚠️  Directory ${localDirectory} does not exist, skipping...`);
        return;
    }

    const assetPaths = getAllFiles(localDirectory);
    
    if (assetPaths.length === 0) {
        console.log(`⚠️  No files found in ${localDirectory}, skipping...`);
        return;
    }

    console.log(`📁 Uploading ${assetPaths.length} files from ${localDirectory} to ${s3Prefix}/`);

    await Promise.all(assetPaths.map(async (relativePath) => {
        const fullPath = path.join(localDirectory, relativePath);
        const contentType = mime.lookup(fullPath) || 'application/octet-stream';

        const s3Key = path.posix.join(s3Prefix, relativePath); // Use posix for forward slashes

        console.log(`Uploading: ${s3Key}`);

        try {
            await s3Client.send(new PutObjectCommand({
                Bucket: bucketName,
                Key: s3Key,
                Body: fs.readFileSync(fullPath),
                ContentType: contentType,
                ACL: 'public-read', // Optional for public buckets
            }));
            console.log(`✅ Uploaded: ${s3Key}`);
        } catch (err) {
            console.error(`❌ Error uploading "${s3Key}":`, err);
            throw err;
        }
    }));
}

// Upload directories
(async () => {
    try {
        // Upload _nuxt assets
        await uploadDirectory(".output/public/_nuxt/", "_nuxt");
        
        // Upload fonts
        await uploadDirectory(".output/public/_fonts/", "_fonts");
        
        console.log("🎉 All uploads completed successfully!");
    } catch (err) {
        console.error("🚨 Upload failed:", err);
        process.exit(1);
    }
})();
