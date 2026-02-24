import {tmdbApi} from "@/entities/movie/api/tmdbApi.ts";
import {type Movie, type MoviesResponse, MoviesResponseSchema} from "@/entities/movie/model/schema.ts";
import {validate, validateAndTransform} from "@/shared/lib/zod.ts";

export const popularApi = tmdbApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    fetchAllPopularMovies: build.query<MoviesResponse, number>({
      query: (page = 1) => ({url: `movie/popular?language=ru-RU&page=${page}`}),
      transformResponse: (response: unknown) => validate(MoviesResponseSchema)(response),
    }),
    fetchPopularMovies: build.query<MoviesResponse, void>({
      query: () => ({method: 'get', url: 'movie/popular?language=ru-RU&page=1'}),
      transformResponse: (response: unknown): MoviesResponse =>
        validateAndTransform(
          MoviesResponseSchema,
          (data) => ({
            ...data,
            results: data.results.slice(0, 6)
          })
        )(response),
    }),
    fetchRandomPopularMovie: build.query<Movie, void>({
      query: () => ({method: 'get', url: 'movie/popular?language=ru-RU&page=1'}),
      transformResponse: (response: MoviesResponse): Movie => {
        const validated = validate(MoviesResponseSchema)(response);
        if (response.results && response.results.length > 0) {
          const randomMovie = Math.floor(Math.random() * validated.results.length);
          return validated.results[randomMovie]
        }
        throw new Error('No movies available');
      }
    })
  })
})

export const { useFetchPopularMoviesQuery, useFetchRandomPopularMovieQuery, useFetchAllPopularMoviesQuery } = popularApi;