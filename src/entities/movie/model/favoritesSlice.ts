// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import type { Movie, FavoriteMovie } from "./schema";
// import {loadFavorites, mapMovieToFavorite} from "@/shared/utils/favoritesUtils.ts";
//
// type FavoritesState = {
//   movies: FavoriteMovie[];
// };
//
// const initialState: FavoritesState = {
//   movies: loadFavorites(),
// };
//
// const favoritesSlice = createSlice({
//   name: "favorites",
//   initialState,
//   reducers: {
//     addToFavorites(state, action: PayloadAction<Movie>) {
//       const exists = state.movies.some(m => m.id === action.payload.id);
//       if (!exists) {
//         const favorite = mapMovieToFavorite(action.payload);
//         state.movies.push(favorite);
//         localStorage.setItem("favorites", JSON.stringify(state.movies));
//       }
//     },
//     removeFromFavorites(state, action: PayloadAction<Movie>) {
//       state.movies = state.movies.filter(m => m.id !== action.payload.id);
//       localStorage.setItem("favorites", JSON.stringify(state.movies));
//     },
//   },
// });
//
// export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
// export default favoritesSlice.reducer;

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FavoriteMovie } from "./schema";
import { loadFavorites } from "@/shared/utils/favoritesUtils";

type FavoritesState = {
  movies: FavoriteMovie[];
};

const initialState: FavoritesState = {
  movies: loadFavorites(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<FavoriteMovie>) {
      const exists = state.movies.some(m => m.id === action.payload.id);

      if (!exists) {
        state.movies.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.movies));
      }
    },

    removeFromFavorites(state, action: PayloadAction<number>) {
      state.movies = state.movies.filter(m => m.id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.movies));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;