import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQueryWithErrorHandling} from "@/entities/movie/api/baseApi.ts";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: baseQueryWithErrorHandling,
  endpoints: () => ({}),
})