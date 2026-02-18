export type SearchMoviesArgs = {
  query: string
  page: number
}

export interface FiltersState {
  sortBy: string;
  rating: [number, number];
  genres: number[];
  page: number;
}