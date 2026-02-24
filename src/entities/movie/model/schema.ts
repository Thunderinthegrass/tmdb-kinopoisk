import { z } from "zod";

export const FavoriteMovie = z.object({
  id: z.number(),
  title: z.string(),
  poster_path: z.string().nullable(),
  vote_average: z.number(),
})

export const CastSchema = z.object({
  id: z.number(),
  name: z.string(),
  character: z.string(),
  profile_path: z.string().nullable(),
});

export const CreditsSchema = z.object({
  cast: z.array(CastSchema),
});

export const GenreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const MovieSchema = z
  .object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    credits: CreditsSchema.nullable().optional(),
    genres: z.array(GenreSchema).optional(),
    genre_ids: z.array(z.number()).optional(),
    id: z.number(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    release_date: z.string(),
    runtime: z.number().optional(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
  })
  .transform((movie) => {
    const year = movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : null;

    return {
      ...movie,
      year: Number.isNaN(year) ? null : year,
    };
  });

export const MoviesResponseSchema = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export const SearchMoviesArgsSchema = z.object({
  query: z.string().min(1),
  page: z.number().min(1).optional(),
});

export const DiscoverMoviesResponseSchema = MoviesResponseSchema;

export const GenresResponseSchema = z.object({
  genres: z.array(GenreSchema),
});

export type Movie = z.infer<typeof MovieSchema>;
export type FavoriteMovie = z.infer<typeof FavoriteMovie>;
export type MoviesResponse = z.infer<typeof MoviesResponseSchema>;
export type Genre = z.infer<typeof GenreSchema>;
export type GenresResponse = z.infer<typeof GenresResponseSchema>;
export type DiscoverMoviesResponse = z.infer<typeof DiscoverMoviesResponseSchema>;
export type FavoritePayload = z.infer<typeof FavoriteMovie>;