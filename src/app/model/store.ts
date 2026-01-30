import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query";
import { popularApi } from "@/features/api/popularApi/popularApi.ts";
import { searchApi } from "@/features/api/searchApi/searchApi.ts";
import {topRatedApi} from "@/features/api/topRatedApi/topRatedApi.ts";
import {upcomingApi} from "@/features/api/upcomingApi/upcomingApi.ts";
import favoritesReducer from "@/app/model/favoritesSlice.ts";
import {nowPlayingApi} from "@/features/api/nowPlayingApi/nowPlayingApi.ts";


export const  store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    [popularApi.reducerPath]: popularApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [topRatedApi.reducerPath]: topRatedApi.reducer,
    [upcomingApi.reducerPath]: upcomingApi.reducer,
    [nowPlayingApi.reducerPath]: nowPlayingApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
      popularApi.middleware,
      searchApi.middleware,
      topRatedApi.middleware,
      upcomingApi.middleware,
      nowPlayingApi.middleware,
    ),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;