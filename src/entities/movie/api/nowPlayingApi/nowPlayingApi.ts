import { tmdbApi } from "@/entities/movie/api/tmdbApi.ts";
import {type MoviesResponse, MoviesResponseSchema} from "@/entities/movie/model/schema.ts";
import {validate, validateAndTransform} from "@/shared/lib/zod.ts";

export const nowPlayingApi = tmdbApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    fetchAllNowPlayingMovies: build.query<MoviesResponse, number>({
      query: (page = 1) => `movie/now_playing?language=ru-RU&page=${page}`,
      transformResponse: (response: unknown) => validate(MoviesResponseSchema)(response),
    }),
    fetchNowPlayingMovies: build.query<MoviesResponse, void>({
      query: () => 'movie/now_playing?language=ru-RU&page=1',
      transformResponse: (response: unknown): MoviesResponse =>
        validateAndTransform(
          MoviesResponseSchema,
          (data) => ({
            ...data,
            results: data.results.slice(0, 6)
          })
        )(response),
    }),
  })
})

export const { useFetchNowPlayingMoviesQuery, useFetchAllNowPlayingMoviesQuery } = nowPlayingApi;