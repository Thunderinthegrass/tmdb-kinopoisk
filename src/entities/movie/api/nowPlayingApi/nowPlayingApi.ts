import { tmdbApi } from "@/entities/movie/api/tmdbApi.ts";
import {type MoviesResponse, MoviesResponseSchema} from "@/entities/movie/model/schema.ts";
import {validateAndTransform} from "@/shared/lib/zod.ts";

export const nowPlayingApi = tmdbApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    fetchAllNowPlayingMovies: build.query<MoviesResponse, number>({
      query: (page = 1) => `movie/now_playing?language=ru-RU&page=${page}`,
    }),
    fetchNowPlayingMovies: build.query<MoviesResponse, void>({
      query: () => 'movie/now_playing?language=ru-RU&page=1',
      transformResponse: validateAndTransform(
        MoviesResponseSchema,
        (data) => ({
          ...data,
          results: data.results.slice(0, 6),
        })
      )
    }),
    // fetchRandomNowPlayingMovie: build.query<Movie, void>({
    //   query: () => ({method: 'get', url: 'movie/now_playing?language=ru-RU&page=1'}),
    //   transformResponse: (response: MoviesResponse): Movie => {
    //     if (response.results && response.results.length > 0) {
    //       const randomMovie = Math.floor(Math.random() * response.results.length);
    //       return response.results[randomMovie]
    //     }
    //     throw new Error('No movies available');
    //   }
    // })
  })
})

export const { useFetchNowPlayingMoviesQuery, useFetchAllNowPlayingMoviesQuery } = nowPlayingApi;