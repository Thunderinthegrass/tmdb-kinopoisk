import type { SearchMoviesArgs } from "@/entities/movie/model/types.ts";
import {tmdbApi} from "@/entities/movie/api/tmdbApi.ts";
import {
  type Movie,
  MovieSchema,
  type MoviesResponse,
  MoviesResponseSchema,
  SearchMoviesArgsSchema
} from "@/entities/movie/model/schema.ts";
import {validate, validateAndTransform} from "@/shared/lib/zod.ts";

export const searchApi = tmdbApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    searchMovies: builder.query<MoviesResponse, SearchMoviesArgs>({
      query: (args) => {
        const validated = SearchMoviesArgsSchema.parse(args);

        return {
          url: 'search/movie?language=ru-RU',
          params: {
            query: validated.query.trim(),
            page: validated.page
          }
        }
      },
      transformResponse: (response: unknown) => validate(MoviesResponseSchema)(response),
    }),
    getMovie: builder.query<Movie, number>({
      query: (id) => ({
        url: `movie/${id}`,
        params: {
          language: "ru-RU",
          append_to_response: "credits"
        }
      }),
      transformResponse: (response: unknown) => validate(MovieSchema)(response),
    }),
    getSimilarMovies: builder.query<MoviesResponse, number>({
      query: (id) => ({
        url: `movie/${id}/similar`,
        params: {
          language: "ru-RU",
        }
      }),
      transformResponse: validateAndTransform(
        MoviesResponseSchema,
        (data) => ({
          ...data,
          results: data.results.slice(0, 6),
        })
      )
    })
  })
})

export const { useSearchMoviesQuery, useGetMovieQuery, useGetSimilarMoviesQuery } = searchApi