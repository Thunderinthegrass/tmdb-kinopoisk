import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {Movie, SearchMoviesArgs, MoviesResponse} from "@/entities/movie/model/types.ts";

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    }
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query<MoviesResponse, SearchMoviesArgs>({
      query: ({query, page}) => ({
        // url: 'search/movie?include_adult=false&language=en-US&page=4',
        url: 'search/movie?language=ru-RU',
        params: {
          query: query.trim(),
          page
        }
      })
    }),
    getMovie: builder.query<Movie, number>({
      query: (id) => ({
        url: `movie/${id}`,
        params: {
          language: "ru-RU",
          append_to_response: "credits"
        }
      }),
      transformResponse: (response: Movie) => ({
        ...response,
        year: new Date(response.release_date).getFullYear(),
      })
    })
  })
})

export const { useSearchMoviesQuery, useGetMovieQuery } = searchApi