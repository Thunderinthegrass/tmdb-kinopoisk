import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {Movie, MoviesResponse} from "@/features/api/popularApi/popularApi.types.ts";

export const popularApi = createApi({
  reducerPath: "popularApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    }
  }),
  endpoints: (build) => ({
    fetchPopularMovies: build.query<MoviesResponse, void>({
      query: () => ({method: 'get', url: 'movie/popular?language=en-US&page=1'}),
    }),
    fetchRandomPopularMovie: build.query<Movie, void>({
      query: () => ({method: 'get', url: 'movie/popular?language=en-US&page=1'}),
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

export const { useFetchPopularMoviesQuery, useFetchRandomPopularMovieQuery } = popularApi;