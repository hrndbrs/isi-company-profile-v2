# Inspirasi Satu Indonesia - Company Profile v2

## Tech Stack

### Core Frameworks & Libraries
- Nuxt `^4.0.1`
- Vue `^3.5.18`
- Vue Router `^4.5.1`
- Vite (via Nuxt)

### Styling & Animations
- Tailwind CSS `^4.1.11`
- Iconify Heroicons Icon Pack `1.2.2`
- GSAP `^3.13.0`
- motion-v `^1.7.0`

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
npm run check
```

### Lint code

```bash
npm run lint
```

### Lint staged files

```bash
npm run lint:staged
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
│   │   ├── css/
│   │   └── svg/
│   ├── components/
│   │   └── sections/
│   │       ├── about/
│   │       ├── home/
│   │       └── shared/
│   ├── composables/
│   ├── layouts/
│   ├── pages/
│   ├── plugins/
│   ├── types/
│   ├── utils/
│   ├── app.vue
│   └── router.options.ts
├── public/
├── biome.json
├── nuxt.config.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

```
