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

export interface DiscoverMoviesParams {
  sortBy?: 'popularity.asc' | 'popularity.desc' |
    'release_date.asc' | 'release_date.desc' |
    'vote_average.asc' | 'vote_average.desc' |
    'original_title.asc' | 'original_title.desc';
  ratingGte?: number; // минимальный рейтинг
  ratingLte?: number; // максимальный рейтинг
  genres?: number[];  // массив ID жанров
  page?: number;      // страница пагинации
}