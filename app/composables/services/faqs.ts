import type { FAQ } from "~/types/schema.type";
import { useStrapi } from "./strapi";

export async function useFAQS() {
  const { data, ...props } = await useStrapi<FAQ[]>("/faqs");

  return { faqs: data, ...props };
}
