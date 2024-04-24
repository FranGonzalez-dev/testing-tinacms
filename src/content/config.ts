import { defineCollection, z } from 'astro:content';
import { CATEGORIES } from '../config/categories.ts'

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string().max(80),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.enum(CATEGORIES),
	}),
});

export const collections = { blog };
