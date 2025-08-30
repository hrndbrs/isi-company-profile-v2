// server/api/__sitemap__/urls.ts
import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'

export type Blog = {
    id: string;
    slug: string;
    title: string;
    content: string;
    image: {
      url: string;
    };
    publishedAt: string;
    author?: string;
    createdAt: string;
  };

export default defineSitemapEventHandler(async () => {
  const { data: blogs }: { data: Blog[] } = await $fetch(`${process.env.STRAPI_URL}/blogs?pagination[pageSize]=1000&sort[0]=createdAt:desc&populate[0]=image`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  })
  
  return blogs.map((item) => ({
    loc: `/blogs/${item.slug}`,
    lastmod: item.publishedAt,
    images: [
      {
        loc: `/blogs/${item.image.url}`,
        alt: item.title,
      }
    ]
  })) as SitemapUrlInput[]
})
