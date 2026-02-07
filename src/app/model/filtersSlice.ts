import { createSlice } from "@reduxjs/toolkit";
import type {FiltersState} from "@/features/api/popularApi/popularApi.types.ts";


const initialState: FiltersState = {
  sortBy: 'popularity.desc',
  rating: [0, 10],
  // genres: [28],
  genres: [],
  page: 1,
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sortBy = action.payload;
      state.page = 1;
    },

    setRating: (state, action) => {
      state.rating = action.payload;
      state.page = 1;
    },

    toggleGenre: (state, action) => {
      const id = action.payload;

      if (state.genres.includes(id)) {
        state.genres = state.genres.filter(genre => genre !== id);
      } else {
        state.genres.push(id);
      }
    },

    setPage: (state, action) => {
      state.page = action.payload;
    },

    resetFilters: () => initialState,
  }
})

export const { setSort, setRating, toggleGenre, setPage, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;