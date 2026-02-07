export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string; // ISO date: YYYY-MM-DD
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface SearchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export type SearchMoviesArgs = {
  query: string
  page: number
}

export interface DiscoverMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface GenresResponse {
  genres: Genre[];
}

export interface DiscoverMoviesParams {
  sortBy?: string;
  ratingGte?: number;
  ratingLte?: number;
  genres: number[];
  page: number;
}

export interface FiltersState {
  sortBy: string;
  rating: [number, number];
  genres: number[]; // Явно указываем тип number[]
  page: number;
}