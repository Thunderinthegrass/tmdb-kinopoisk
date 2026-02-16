import {tmdbApi} from "@/entities/movie/api/tmdbApi.ts";
import {type MoviesResponse, MoviesResponseSchema} from "@/entities/movie/model/schema.ts";
import {validateAndTransform} from "@/shared/lib/zod.ts";

export const topRatedApi = tmdbApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    fetchAllTopRatedMovies: build.query<MoviesResponse, number>({
      query: (page = 1) => `movie/top_rated?language=ru-RU&page=${page}`
    }),
    fetchTopRatedMovies: build.query<MoviesResponse, void>({
      query: () => 'movie/top_rated?language=ru-RU&page=1',
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

export const { useFetchTopRatedMoviesQuery, useFetchAllTopRatedMoviesQuery } = topRatedApi;