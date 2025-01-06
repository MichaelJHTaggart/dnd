import { defineCollection, z } from 'astro:content';

const campaignCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.date(),
    image: z.string().optional(),
    backgroundColor: z.string().optional(),
    textColor: z.string().optional(),
    status: z.enum(['active', 'completed', 'planned']).default('completed'),
    players: z.array(z.object({
      name: z.string(),
      character: z.object({
        name: z.string(),
        class: z.string(),
        race: z.string(),
        level: z.number(),
        portrait: z.string().optional(),
        quote: z.string().optional(),
      }),
    })).default([]),
    fallenHeroes: z.array(z.object({
      playerName: z.string(),
      name: z.string(),
      class: z.string(),
      race: z.string(),
      level: z.number(),
      portrait: z.string().optional(),
      quote: z.string().optional(),
      deathDate: z.date(),
      causeOfDeath: z.string(),
    })).optional(),
  }),
});

const sessionCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    campaign: z.string(),
    date: z.date(),
    description: z.string(),
    highlights: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'campaigns': campaignCollection,
  'sessions': sessionCollection,
};