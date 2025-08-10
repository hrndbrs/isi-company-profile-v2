import gsap from "gsap";

export type Callback = ($gsap: typeof gsap) => void;
export type Dependencies = Parameters<typeof watch>[0][];

export function useGSAP(cb?: Callback, deps: Dependencies = []) {
  const { width } = useWindowSize();

  const ctx = ref<gsap.Context | null>(null);
  const createContext = () => {
    ctx.value?.revert();

    return gsap.context(() => {
      cb?.(gsap);
    });
  };
  const contextSafe = (safeCb: Callback) => () => {
    if (!ctx.value) {
      ctx.value = createContext();
    }

    return ctx.value.add(() => safeCb(gsap));
  };

  watch([width, ...deps], () => {
    ctx.value = createContext();
  });

  onMounted(() => {
    ctx.value = createContext();
  });

  onBeforeUnmount(() => {
    ctx.value?.revert();
  });

  return { ctx, contextSafe };
}
