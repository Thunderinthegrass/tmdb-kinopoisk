import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {
  DiscoverMoviesParams,
  DiscoverMoviesResponse,
  GenresResponse
} from "@/entities/movie/model/types.ts";

export const filtersApi = createApi({
  reducerPath: "filtersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    }
  }),
  endpoints: (builder) => ({
    discoverMovies: builder.query<DiscoverMoviesResponse, DiscoverMoviesParams>({
      query: ({
        sortBy,
        ratingGte,
        ratingLte,
        genres,
        page,
      }) => ({
        url: `discover/movie?language=ru-RU&page=${page}`,
        params: {
          sort_by: sortBy,
          'vote_average.gte': ratingGte,
          'vote_average.lte': ratingLte,
          with_genres: genres.join(','),
          page,
        },
      })
    }),
    getGenres: builder.query<GenresResponse, void>({
      query: () => ({
        url: 'genre/movie/list?language=ru-RU'
      })
    })
  })
})

export const { useDiscoverMoviesQuery, useGetGenresQuery } = filtersApi;