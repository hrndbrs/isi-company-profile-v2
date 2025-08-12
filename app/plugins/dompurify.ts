import DOMPurify from "isomorphic-dompurify";
import VueDOMPurifyHTML from "vue-dompurify-html";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueDOMPurifyHTML,
    { enableSSRPropsSupport: true },
    () => DOMPurify,
  );
});
