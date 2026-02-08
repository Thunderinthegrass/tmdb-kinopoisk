import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type { MoviesResponse} from "@/entities/movie/model/types.ts";

export const topRatedApi = createApi({
  reducerPath: 'topRatedApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    }
  }),
  endpoints: (build) => ({
    fetchAllTopRatedMovies: build.query<MoviesResponse, number>({
      query: (page = 1) => ({
        url: `movie/top_rated?language=ru-RU&page=${page}`
      })
    }),
    fetchTopRatedMovies: build.query<MoviesResponse, void>({
      query: () => ({
        method: 'get',
        url: 'movie/top_rated?language=ru-RU&page=1'
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

export const { useFetchTopRatedMoviesQuery, useFetchAllTopRatedMoviesQuery } = topRatedApi;