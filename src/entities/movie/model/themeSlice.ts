import {createSlice} from "@reduxjs/toolkit";

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem('theme');
  return saved ? saved : 'light';
};

const initialState = {
  theme: getInitialTheme(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    }
  }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;