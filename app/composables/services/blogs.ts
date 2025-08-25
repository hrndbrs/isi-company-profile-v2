import type { Blog } from "~/types/schema.type";
import { useStrapi } from "./strapi";

export async function useBlogList(page: Ref<number>) {
  const { data, ...props } = await useStrapi<Blog[]>("/blogs", {
    query: {
      "populate[0]": "image",
      "pagination[page]": page,
      "pagination[pageSize]": 8,
      "sort[0]": "createdAt:desc",
    },
  });

  return { blogs: data, ...props };
}
