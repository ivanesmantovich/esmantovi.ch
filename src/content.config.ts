import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "notes" }),
  schema: z.object({
    title: z.string(),
    preview: z.string(),
    date: z.string(),
  }),
});

export const collections = { notes };
