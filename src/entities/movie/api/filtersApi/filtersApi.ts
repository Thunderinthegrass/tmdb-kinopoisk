import type {
  DiscoverMoviesParams,
} from "@/entities/movie/model/types.ts";
import {tmdbApi} from "@/entities/movie/api/tmdbApi.ts";
import {validate} from "@/shared/lib/zod.ts";
import {
  type DiscoverMoviesResponse,
  DiscoverMoviesResponseSchema, type GenresResponse,
  GenresResponseSchema
} from "@/entities/movie/model/schema.ts";

export const filtersApi = tmdbApi.injectEndpoints({
  overrideExisting: false,
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
          with_genres: genres?.join(','),
          page,
        },
      }),
      transformResponse: validate(DiscoverMoviesResponseSchema),
    }),
    getGenres: builder.query<GenresResponse, void>({
      query: () => 'genre/movie/list?language=ru-RU',
      transformResponse: validate(GenresResponseSchema),
    })
  })
})

export const { useDiscoverMoviesQuery, useGetGenresQuery } = filtersApi;