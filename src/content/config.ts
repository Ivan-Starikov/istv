import { z, defineCollection } from "astro:content";

const versLibres = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // tags: z.array(z.string()),
  }),
});

export const collections = {
  versLibres: versLibres,
};
