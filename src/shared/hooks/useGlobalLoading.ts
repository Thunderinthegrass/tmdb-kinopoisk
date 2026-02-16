import {useSelector} from "react-redux";
import type { RootState } from "@/app/providers/store/store.ts";

export const useGlobalLoading = () => {
  return useSelector((state: RootState) => {
    const queries = Object.values(state.tmdbApi.queries || {});

    const hasActiveQueries = queries.some(query => query?.status === "pending");

    return hasActiveQueries;
  })
}