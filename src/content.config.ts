import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/writing/notes' }),
  schema: z.object({
    title: z.string(),
    preview: z.string(),
    date: z.string(),
    hnUrl: z.string().optional(),
  }),
})

const thoughts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/writing/thoughts' }),
  schema: z.object({
    date: z.string(),
  }),
})

export const collections = { notes, thoughts }
