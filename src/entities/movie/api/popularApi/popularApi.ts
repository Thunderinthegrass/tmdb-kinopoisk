import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {Movie, MoviesResponse} from "@/entities/movie/model/types.ts";

export const popularApi = createApi({
  reducerPath: "popularApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    }
  }),
  endpoints: (build) => ({
    fetchAllPopularMovies: build.query<MoviesResponse, number>({
      query: (page = 1) => ({url: `movie/popular?language=ru-RU&page=${page}`}),
    }),
    fetchPopularMovies: build.query<MoviesResponse, void>({
      query: () => ({method: 'get', url: 'movie/popular?language=ru-RU&page=1'}),
      transformResponse: (response: MoviesResponse): MoviesResponse => {
        return {
          ...response,
          results: response.results.slice(0, 6)
        }
      }
    }),
    fetchRandomPopularMovie: build.query<Movie, void>({
      query: () => ({method: 'get', url: 'movie/popular?language=ru-RU&page=1'}),
      transformResponse: (response: MoviesResponse): Movie => {
        if (response.results && response.results.length > 0) {
          const randomMovie = Math.floor(Math.random() * response.results.length);
          return response.results[randomMovie]
        }
        throw new Error('No movies available');
      }
    })
  })
})

export const { useFetchPopularMoviesQuery, useFetchRandomPopularMovieQuery, useFetchAllPopularMoviesQuery } = popularApi;