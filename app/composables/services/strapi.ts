import type { StrapiObject } from "~/types/schema.type";

export function useStrapi<T = unknown>(
  path: string,
  opts: Parameters<typeof useFetch<StrapiObject<T>>>[1] = {},
) {
  const config = useRuntimeConfig();
  return useFetch<StrapiObject<T>>(path, {
    ...opts,
    baseURL: config.public.apiUrl,
    headers: {
      ...opts.headers,
      Authorization: `Bearer ${config.public.apiToken}`,
    },
  });
}
