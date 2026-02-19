import { z } from "zod";
import type {FavoriteMovie, Movie} from "@/entities/movie/model/schema.ts";

export const FavoriteMovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  poster_path: z.string().nullable(),
  vote_average: z.number(),
});

export const FavoriteMoviesArray = z.array(FavoriteMovieSchema);

// Конвертация Movie в FavoriteMovie
export const mapMovieToFavorite = (movie: Movie): FavoriteMovie =>
  FavoriteMovieSchema.parse({
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
  });

// Безопасная загрузка из localStorage
export const loadFavorites = (): FavoriteMovie[] => {
  const raw = localStorage.getItem("favorites");
  if (!raw) return [];

  try {
    return FavoriteMoviesArray.parse(JSON.parse(raw));
  } catch {
    return [];
  }
};