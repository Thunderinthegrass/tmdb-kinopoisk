import {type BaseQueryFn, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";
import type {FetchArgs, FetchBaseQueryError} from "@reduxjs/toolkit/query";

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers) => {
    const token = import.meta.env.VITE_TMDB_TOKEN; // используем токен из env
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithErrorHandling: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQueryWithAuth(args, api, extraOptions);

  if (result.error) {
    if (typeof result.error.status === "number") {
      if (result.error.status === 401 || result.error.status === 403) {
        toast.error("Невалидный токен. Пожалуйста, проверьте токен.");
      } else if (result.error.status >= 500) {
        toast.error("Ошибка сервера. Попробуйте позже.");
      }
    } else {
      toast.error("Ошибка сети. Проверьте подключение.");
    }
  }

  return result;
};