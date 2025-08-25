import type { Testimonial } from "~/types/schema.type";
import { useStrapi } from "./strapi";

export async function useTestimonial() {
  const { data, ...props } = await useStrapi<Testimonial[]>("/testimonials", {
    query: {
      "populate[0]": "image",
    },
  });
  return { testimonies: data, ...props };
}
