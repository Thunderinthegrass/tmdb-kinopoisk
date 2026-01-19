import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query";
import { popularApi } from "@/features/api/popularApi/popularApi.ts";
import { searchApi } from "@/features/api/searchApi/searchApi.ts";


export const  store = configureStore({
  reducer: {
    [popularApi.reducerPath]: popularApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
      popularApi.middleware,
      searchApi.middleware,
    ),
})

setupListeners(store.dispatch)