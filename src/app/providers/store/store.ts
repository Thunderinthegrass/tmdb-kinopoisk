import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query";
import { tmdbApi } from "@/entities/movie/api/tmdbApi.ts";
import filtersReducer from "@/entities/movie/model/filtersSlice.ts";
import favoritesReducer from "@/entities/movie/model/favoritesSlice.ts";
import themeReducer from "@/entities/movie/model/themeSlice.ts";


export const  store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    filters: filtersReducer,
    theme: themeReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
      tmdbApi.middleware,
    ),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;