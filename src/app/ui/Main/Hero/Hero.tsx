import {useFetchRandomPopularMovieQuery} from "@/features/api/popularApi/popularApi.ts";
import s from "./Hero.module.css"
import {SearchForm} from "@/features/Search/SearchForm/SearchForm.tsx";

export const Hero = () => {
  const { data, isLoading } = useFetchRandomPopularMovieQuery()

  console.log(data)

  if (isLoading || !data || !data.backdrop_path) return "Крутилка"

  const heroStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
  }

  return (
    <div className={s.hero} style={heroStyle}>
      <h2 className={s.heroTitle}>{data.original_title}</h2>
      <SearchForm />
    </div>
  );
};