import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {SearchMoviesArgs, SearchMoviesResponse} from "@/features/api/popularApi/popularApi.types.ts";

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    }
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query<SearchMoviesResponse, SearchMoviesArgs>({
      query: ({query, page}) => ({
        // url: 'search/movie?include_adult=false&language=en-US&page=4',
        url: 'search/movie',
        params: {
          query: query.trim(),
          page
        }
      })
    }),
    getMovie: builder.query({
      query: (id) => `movie/${id}`
    })
  })
})

export const { useSearchMoviesQuery, useGetMovieQuery } = searchApi