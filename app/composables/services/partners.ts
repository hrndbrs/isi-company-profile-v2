import type { Partner } from "~/types/schema.type";
import { useStrapi } from "./strapi";

export async function usePartners() {
  const { data, ...props } = await useStrapi<Partner[]>("/partners", {
    query: {
      "populate[0]": "image",
    },
  });
  return { partners: data, ...props };
}
