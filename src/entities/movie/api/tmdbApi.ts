import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQueryWithErrorHandling} from "@/entities/movie/api/baseApi.ts";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  // baseQuery: fetchBaseQuery({
  //   baseUrl: import.meta.env.VITE_BASE_URL,
  //   headers: {
  //     Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  //   }
  // }),
  baseQuery: baseQueryWithErrorHandling,
  endpoints: () => ({}),
})