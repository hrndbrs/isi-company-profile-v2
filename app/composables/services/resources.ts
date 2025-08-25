import type { Resource } from "~/types/schema.type";
import { useStrapi } from "./strapi";

export async function useResourceList(page: Ref<number>) {
  const { data, ...props } = await useStrapi<Resource[]>("/resources", {
    query: {
      "populate[0]": "image",
      "pagination[page]": page,
      "pagination[pageSize]": 8,
      "sort[0]": "createdAt:desc",
    },
  });

  return { resources: data, ...props };
}
