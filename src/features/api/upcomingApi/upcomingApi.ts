import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {MoviesResponse} from "@/features/api/popularApi/popularApi.types.ts";

export const upcomingApi = createApi({
  reducerPath: "upcomingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    }
  }),
  endpoints: (build) => ({
    fetchAllUpcomingMovies: build.query<MoviesResponse, number>({
      query: (page = 1) => ({url: `movie/upcoming?language=ru-RU&page=${page}`}),
    }),
    fetchUpcomingMovies: build.query<MoviesResponse, void>({
      query: () => ({
        method: 'get',
        url: 'movie/upcoming?language=ru-RU&page=1'
      }),
      transformResponse: (response: MoviesResponse): MoviesResponse => {
        return {
          ...response,
          results: response.results.slice(0, 6)
        }
      }
    })
  })
})

export const { useFetchUpcomingMoviesQuery, useFetchAllUpcomingMoviesQuery } = upcomingApi;