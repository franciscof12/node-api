import z from 'zod'

const movieSchema = z.object({
  title: z.string(),
  year: z.number().int().positive(),
  director: z.string(),
  duration: z.number().positive(),
  rate: z.number().positive().min(0).max(10).default(1),
  poster: z.string().url(),
  genre: z.array(z.string()).max(3)
})

export function validateMovie (movie) {
  return movieSchema.safeParse(movie)
}

export function validatePartialMovie (movie) {
  return movieSchema.partial().safeParse(movie)
}
