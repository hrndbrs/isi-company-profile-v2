import gsap from "gsap";

export type Callback = ($gsap: typeof gsap, ctx: gsap.Context) => void;
export type Scope = HTMLElement | string;
export type Dependencies = Parameters<typeof watch>[0][];
export type Options = {
  deps?: Dependencies;
  scope?: Scope;
};

export function useGSAP(cb?: Callback, opts?: Dependencies | Options) {
  const { width } = useWindowSize();
  const ctx = ref<gsap.Context | null>(null);
  const contextSafe = (cb: Callback, sc?: Scope) => () => {
    if (!ctx.value) {
      ctx.value = createContext(cb, sc);
      return;
    }
    const currentCtx = ctx.value;
    currentCtx.value.add(() => cb(gsap, currentCtx), sc);
  };

  let deps: Dependencies = [],
    scope: Scope = "body";

  if (Array.isArray(opts)) {
    deps = opts;
  } else if (opts) {
    scope = opts.scope ? opts.scope : scope;
    deps = opts.deps ? opts.deps : deps;
  }

  watch([width, ...deps], () => {
    ctx.value?.revert();
    ctx.value = createContext(cb, scope);
  });

  onMounted(() => {
    nextTick(() => {
      if (cb && ctx.value) return contextSafe(cb, scope)();
      ctx.value = createContext(cb, scope);
    });
  });

  onBeforeUnmount(() => {
    ctx.value?.revert();
  });

  return { ctx, contextSafe };
}

const createContext = (cb?: Callback, sc?: Scope) => {
  return gsap.context((self) => cb?.(gsap, self), sc);
};
