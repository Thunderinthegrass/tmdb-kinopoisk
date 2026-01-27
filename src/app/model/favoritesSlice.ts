import type {Movie} from "@/features/api/popularApi/popularApi.types.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type FavoritesState = {
  movies: Movie[];
}

const initialState: FavoritesState = {
  movies: JSON.parse(localStorage.getItem("favorites") || "[]")
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<Movie>) {
      const existingMovie = state.movies.some(movie => movie.id === action.payload.id);
      if (!existingMovie) {
        state.movies.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.movies));
      }
    },
    removeFromFavorites(state, action: PayloadAction<Movie>) {
      state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
      localStorage.setItem("favorites", JSON.stringify(state.movies));
    }
  }
})

export const {addToFavorites, removeFromFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;