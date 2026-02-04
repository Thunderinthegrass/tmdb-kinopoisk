import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const filtersApi = createApi({
  reducerPath: "filtersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    }
  }),
  endpoints: (builder) => ({
    discoverMovies: builder.query({
      query: ({
        sortBy,
        ratingGte,
        ratingLte,
        genres,
        page,
      }) => ({
        url: 'discover/movie',
        params: {
          sort_by: sortBy,
          'vote_average.gte': ratingGte,
          'vote_average.lte': ratingLte,
          with_genres: genres.join(','),
          page,
        },
      })
    }),
    getGenres: builder.query({
      query: () => ({
        url: 'genre/movie/list'
      })
    })
  })
})

export const { useDiscoverMoviesQuery, useGetGenresQuery } = filtersApi;