import {tmdbApi} from "@/entities/movie/api/tmdbApi.ts";
import {type MoviesResponse, MoviesResponseSchema} from "@/entities/movie/model/schema.ts";
import {validateAndTransform} from "@/shared/lib/zod.ts";

export const upcomingApi = tmdbApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    fetchAllUpcomingMovies: build.query<MoviesResponse, number>({
      query: (page = 1) => ({url: `movie/upcoming?language=ru-RU&page=${page}`}),
    }),
    fetchUpcomingMovies: build.query<MoviesResponse, void>({
      query: () => 'movie/upcoming?language=ru-RU&page=1',
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

export const { useFetchUpcomingMoviesQuery, useFetchAllUpcomingMoviesQuery } = upcomingApi;