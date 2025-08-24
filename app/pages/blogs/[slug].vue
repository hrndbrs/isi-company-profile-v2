<script setup lang="ts">
import type { Blog } from "~/types/schema.type";

const dummy: Blog = {
  slug: "introduction-to-web-development",
  title: "Introduction to Web Development",
  content: `
<h1>Dangerous Blog Post <small>(XSS + Prose Stress Test)</small></h1>

<p>
  This paragraph contains <strong>bold</strong>, <em>italic</em>, <u>underline</u>,
  <code>inline code</code>, <abbr title="Cross-Site Scripting">XSS</abbr>,
  and a <a href="javascript:alert('xss-link')">link with javascript:</a>.
</p>

<h2>Script Tags</h2>
<p>Should be removed entirely:</p>

<h2>Event Handlers</h2>
<button onclick="alert('xss-onclick')" style="padding:4px 8px">Click me (onclick)</button>
<img src="invalid.jpg" onerror="alert('xss-onerror-img')" alt="broken image test" />
<div onmouseover="alert('xss-onmouseover')">Hover me (onmouseover)</div>

<h2>Style Attribute JS URLs</h2>
<div style="background-image:url(javascript:alert('xss-style'))">Background image</div>

<h2>Embeds</h2>
<iframe src="javascript:alert('xss-iframe')" title="bad-iframe"></iframe>
<object data="javascript:alert('xss-object')" type="text/html"></object>
<embed src="javascript:alert('xss-embed')"></embed>

<h2>Inline SVG</h2>
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" onload="alert('xss-svg-onload')">
  <rect width="120" height="40" fill="currentColor"></rect>
  <text x="10" y="25" font-size="14" fill="#fff">SVG onload</text>
</svg>

<h2>MathML</h2>
<math><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>0</mn></mfrac></math>

<h2>&lt;base&gt; Href</h2>
<base href="javascript:alert('xss-base')//">
<a href="/should-not-jump">Relative link after base</a>

<h2>Meta Refresh</h2>
<meta http-equiv="refresh" content="0;url=javascript:alert('xss-meta')">

<h2>Forms</h2>
<form action="javascript:alert('xss-form')">
  <input name="q" value="autofocus input" autofocus>
  <input type="submit" value="Submit">
</form>
<input type="image" src="invalid" onerror="alert('xss-input-image')">

<h2>Media</h2>
<video controls poster="javascript:alert('xss-video-poster')">
  <source src="invalid.mp4" onerror="alert('xss-video-source')">
</video>
<audio controls>
  <source src="invalid.mp3" onerror="alert('xss-audio-source')">
</audio>

<h2>CSS @import</h2>
<style>
  @import url("javascript:alert('xss-import')");
  body{x:expression(alert('xss-expression'))}
</style>

<h2>Vue Interpolation</h2>
<p>{{ 7 * 7 }} — should NOT evaluate if injected via v-html.</p>
<template v-if="true">Template block (should be inert)</template>
<div v-bind:title="alert('xss-vbind')">v-bind attempt</div>

<h2>Lists</h2>
<ul>
  <li>Bullet one</li>
  <li>Bullet two <ul>
      <li>Nested bullet</li>
    </ul>
  </li>
  <li>Bullet three</li>
</ul>

<ol>
  <li>Ordered one</li>
  <li>Ordered two</li>
  <li>Ordered three</li>
</ol>

<h2>Table</h2>
<table>
  <thead>
    <tr>
      <th>Col A</th>
      <th>Col B</th>
      <th>Col C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td><code>&lt;script&gt;</code></td>
      <td><em>italic</em></td>
      <td><strong>bold</strong></td>
    </tr>
  </tbody>
</table>

<h2>Blockquote</h2>
<blockquote>
  <p>“This is a blockquote with <a href="javascript:alert('xss-quote')">bad link</a> inside.”</p>
</blockquote>

<h2>Code Blocks</h2>
<pre><code class="language-js">
    // Inline event handler payload (should render as code)
    const payload = "&lt;img src=x onerror=alert('xss')&gt;";
    console.log('Test:', payload);
  </code></pre>

<pre><code class="language-html">
    &lt;div onclick="alert('xss')"&gt;Click me&lt;/div&gt;
    &lt;script&gt;alert('xss')&lt;/script&gt;
  </code></pre>

<pre><code class="language-css">
    .foo { background-image: url("javascript:alert('xss-css')"); }
  </code></pre>

<h2>Misc Elements</h2>
<details open>
  <summary>Open me (summary)</summary>
  <p>Hidden content with <sup>sup</sup> and <sub>sub</sub> plus <mark>mark</mark>.</p>
</details>

<hr>

<noscript>
  <p>If JS is disabled, you see this. (Still safe.)</p>
</noscript>

<h2>Picture</h2>
<picture>
  <source srcset="invalid.avif" type="image/avif">
  <source srcset="invalid.webp" type="image/webp">
  <img src="invalid.jpg" onerror="alert('xss-picture-img')" alt="picture test">
</picture>

<h2>Custom Elements</h2>
<x-danger data-attr="test" onclick="alert('xss-custom')">Custom tag with handler</x-danger>

<h2>Links</h2>
<p>
  <a href="https://example.com" target="_blank">External (missing rel)</a> —
  Test if sanitizer adds <code>rel="noopener noreferrer"</code>.
</p>
`,
  image:
    "https://i.pinimg.com/736x/f6/f5/0d/f6f50d5f97407b67d8bddc20056b9917.jpg",
  publishedAt: "2025-08-20T10:00:00Z",
  author: "John Doe",
  createdAt: "2025-08-15T09:30:00Z",
};

const publishedAt = getLocalTime(dummy.publishedAt);
</script>

<template>
  <SectionWrapper
    class="mt-23 mb-40 text-neutral-900"
    :inner-container-props="{
      class: 'max-w-[996px]',
    }"
  >
    <figure>
      <NuxtImg
        :src="dummy.image"
        class="w-full min-h-96 max-h-96 object-cover"
        :alt="dummy.title"
      />
      <figcaption class="sr-only">
        Featured image for the article: {{ dummy.title }}
      </figcaption>
    </figure>

    <article class="mt-6" itemscope itemtype="https://schema.org/Article">
      <div class="flex flex-col gap-3 text-brand-500">
        <h1 class="text-h3 font-bold">{{ dummy.title }}</h1>
        <div class="grid grid-cols-2 grid-rows-2 w-fit gap-x-56">
          <span>Written by</span>
          <span>Posted</span>
          <address class="not-italic" itemprop="author">Budi</address>
          <time :datetime="publishedAt" itemprop="datePublished">
            {{ publishedAt }}
          </time>
        </div>
      </div>

      <div class="prose mt-6" v-dompurify-html="dummy.content" />
    </article>

    <nav
      class="flex justify-between mt-6 py-8"
      aria-label="Blog post navigation"
    >
      <NuxtLink to="#" class="text-left" rel="prev">
        <Icon name="heroicons:chevron-left" />
        <div>
          <p>Previous</p>
          <p class="text-h5">Previous Title</p>
        </div>
      </NuxtLink>

      <NuxtLink to="#" rel="next" class="text-right">
        <div>
          <p>Next</p>
          <p class="text-h5">Next Title</p>
        </div>

        <Icon name="heroicons:chevron-right" />
      </NuxtLink>
    </nav>
  </SectionWrapper>
</template>

<style scoped>
@reference "~/assets/css/main.css";

a {
  @apply inline-flex gap-2 items-center;

  svg {
    @apply size-9 text-brand-500;
  }
}
</style>
