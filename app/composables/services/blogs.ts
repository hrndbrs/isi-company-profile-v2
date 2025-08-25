import type { Blog } from "~/types/schema.type";
import { useStrapi } from "./strapi";

export async function useBlogLatest(limit: number = 4) {
  const { data, ...props } = await useStrapi<Blog[]>("/blogs", {
    key: "blog:list:latest",
    query: {
      "populate[0]": "image",
      "pagination[pageSize]": limit,
      "sort[0]": "createdAt:desc",
    },
  });

  return { blogs: data, ...props };
}

export async function useBlogList(page: Ref<number>) {
  const { data, ...props } = await useStrapi<Blog[]>("/blogs", {
    lazy: true,
    query: {
      "populate[0]": "image",
      "pagination[page]": page,
      "pagination[pageSize]": 8,
      "sort[0]": "createdAt:desc",
    },
  });

  return { blogs: data, ...props };
}

export async function useBlogDetail(slug: string) {
  const { data, ...props } = await useStrapi<Blog>(`/blogs/${slug}`, {
    query: {
      "populate[0]": "image",
    },
    lazy: true,
  });
  return { blog: data, ...props };
}
