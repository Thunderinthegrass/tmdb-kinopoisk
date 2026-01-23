import {Route, Routes} from "react-router";
import {Main} from "@/app/ui/Main/Main.tsx";
import {Path} from "@/common/routing";
import {CategoryMovies} from "@/features";
import {FilteredMovies} from "@/features";
import {Search} from "@/features";
import {Favorites} from "@/features";
import {Movie} from "@/features/Movie/Movie.tsx";


export const Routing = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path={Path.CategoryMovies} element={<CategoryMovies />} />
      <Route path={Path.FilteredMovies} element={<FilteredMovies />} />
      <Route path={Path.Search} element={<Search />} />
      <Route path={Path.Favorites} element={<Favorites />} />
      <Route path={Path.Movie} element={<Movie />} />
    </Routes>
  );
};