# Inspirasi Satu Indonesia - Company Profile v2

## Tech Stack

### Core Frameworks & Libraries
- Nuxt `^4.0.1`
- Vue `^3.5.18`
- Vue Router `^4.5.1`
- Vite (via Nuxt)

### Styling
- Tailwind CSS `^4.1.11`

### Nuxt Modules
- @nuxt/image `^1.11.0`
- @nuxt/icon `^1.15.0`
- @nuxt/fonts `^0.11.4`
- @vueuse/nuxt `^13.6.0`

### Developer Tooling
- Biome `2.1.4`
- Typescript `5.9.2`

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

### Format code

```bash
npm run format
```

### Lint code

```bash
npm run lint
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```
---

## Routes

| Name               	| Path                	|
|--------------------	|---------------------	|
| Landing            	| /                   	|
| About Us           	| /about              	|
| Coaching           	| /services/coaching  	|
| Training           	| /services/training  	|
| Corporate          	| /corporate          	|
| Resilience Academy 	| /resilience-academy 	|
| Blog List          	| /blogs              	|
| Blog Detail        	| /blogs/[slug]       	|
| Resource List      	| /resources          	|
| Resource Detail    	| /resources/[slug]    	|
| Not Found          	| /*                  	|

---

## Project Structure

```bash
.
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css
│   ├── components/
│   │   └── sections/
│   ├── composables/
│   ├── layouts/
│   ├── pages/
│   ├── utils/
│   └── app.vue
├── public/
├── biome.json
├── nuxt.config.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

```
