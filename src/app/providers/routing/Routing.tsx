import {Route, Routes} from "react-router-dom";
import {Main} from "@/pages/Main/Main.tsx";
import {Path} from "@/app/providers/routing/index.tsx";
import {FilteredMoviesPage} from "@/pages/Search";
import {Search} from "@/pages/Search";
import {Favorites} from "@/pages/Search";
import {MoviePage} from "@/pages/MoviePage/MoviePage.tsx";
import {PopularPage} from "@/pages/MoviesPages/PopularPage/PopularPage.tsx";
import {MoviesLayout} from "@/entities/ui/MoviesLayout/MoviesLayout.tsx";
import {UpcomingPage} from "@/pages/MoviesPages/UpcomingPage/UpcomingPage.tsx";
import {TopRatedPage} from "@/pages/MoviesPages/TopRatedPage/TopRatedPage.tsx";
import {NowPlayingPage} from "@/pages/MoviesPages/NowPlayingPage/NowPlayingPage.tsx";
import {Navigate} from "react-router-dom";
import {PageNotFound} from "@/pages/PageNotFound/PageNotFound.tsx";
import {MoviesNotFound} from "@/entities/ui/MoviesNotFound/MoviesNotFound.tsx";

export const Routing = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path={Path.MoviesLayout} element={<MoviesLayout />}>
        <Route index element={<Navigate to={Path.Popular} replace />} />
        <Route path={Path.Popular} element={<PopularPage />} />
        <Route path={Path.Upcoming} element={<UpcomingPage />} />
        <Route path={Path.TopRated} element={<TopRatedPage />} />
        <Route path={Path.NowPlaying} element={<NowPlayingPage />} />
        <Route path="*" element={<MoviesNotFound />} />
      </Route>
      <Route path={Path.FilteredMovies} element={<FilteredMoviesPage />} />
      <Route path={Path.Search} element={<Search />} />
      <Route path={Path.Favorites} element={<Favorites />} />
      <Route path={Path.Movie} element={<MoviePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};