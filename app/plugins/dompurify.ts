import type { ObjectDirective } from "vue";

function createTransformMiddleware(
  ...fns: ((html: string) => string)[]
): (html: string) => string {
  return (html: string) => {
    for (const fn of fns) {
      html = fn(html);
    }

    return html;
  };
}

const transform = createTransformMiddleware(transformH1ToH2);

export default defineNuxtPlugin({
  name: "extend-sanitize-html",
  setup(nuxtApp) {
    const vueApp = nuxtApp.vueApp;

    nuxtApp.hook("app:created", () => {
      const original = vueApp._context.directives["sanitize-html"] as
        | ObjectDirective
        | undefined;

      if (!original) return;

      vueApp.directive("sanitize-html", {
        created(el, binding, ...args) {
          const transformedBinding = {
            ...binding,
            value: binding.value ? transform(binding.value) : binding.value,
          };
          return original.created?.(el, transformedBinding, ...args);
        },
        updated(el, binding, ...args) {
          const transformedBinding = {
            ...binding,
            value: binding.value ? transform(binding.value) : binding.value,
          };
          return original.updated?.(el, transformedBinding, ...args);
        },
        getSSRProps(...bindings) {
          return original.getSSRProps?.(...bindings);
        },
      });
    });
  },
});
