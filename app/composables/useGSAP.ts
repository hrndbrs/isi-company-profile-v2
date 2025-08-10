import gsap from "gsap";

export type Callback = ($gsap: typeof gsap) => void;
export type Scope = HTMLElement | string;
export type Dependencies = Parameters<typeof watch>[0][];
export type Options = {
  deps?: Dependencies;
  scope?: Scope;
};

export function useGSAP(cb?: Callback, opts?: Dependencies | Options) {
  const { width } = useWindowSize();

  const ctx = ref<gsap.Context | null>(null);
  const createContext = (cb?: Callback, sc?: Scope) => {
    ctx.value?.revert();

    return gsap.context(() => {
      cb?.(gsap);
    }, sc);
  };
  const contextSafe = (cb: Callback, sc?: Scope) => () => {
    if (!ctx.value) {
      ctx.value = createContext(cb);
      return;
    }

    return ctx.value.add(() => cb(gsap), sc);
  };

  let deps: Dependencies = [];
  let scope: Scope = "body";

  if (Array.isArray(opts)) {
    deps = opts;
  } else if (opts) {
    scope = opts.scope ? opts.scope : scope;
    deps = opts.deps ? opts.deps : deps;
  }

  watch([width, ...deps], () => {
    ctx.value = createContext(cb, scope);
  });

  onMounted(() => {
    ctx.value = createContext(cb, scope);
  });

  onBeforeUnmount(() => {
    ctx.value?.revert();
  });

  return { ctx, contextSafe };
}
