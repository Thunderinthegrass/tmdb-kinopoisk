import {Route, Routes} from "react-router-dom";
import {Main} from "@/app/ui/Main/Main.tsx";
import {Path} from "@/common/routing";
import {FilteredMovies} from "@/features";
import {Search} from "@/features";
import {Favorites} from "@/features";
import {Movie} from "@/features/Movie/Movie.tsx";
import {PopularPage} from "@/common/components/PopularPage/PopularPage.tsx";
import {MoviesLayout} from "@/common/components/MoviesLayout/MoviesLayout.tsx";
import {UpcomingPage} from "@/common/components/UpcomingPage/UpcomingPage.tsx";
import {TopRatedPage} from "@/common/components/TopRatedPage/TopRatedPage.tsx";
import {NowPlayingPage} from "@/common/components/NowPlayingPage/NowPlayingPage.tsx";

export const Routing = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path={Path.MoviesLayout} element={<MoviesLayout />}>
        <Route index element={<PopularPage />} />
        <Route path={Path.Popular} element={<PopularPage />} />
        <Route path={Path.Upcoming} element={<UpcomingPage />} />
        <Route path={Path.TopRated} element={<TopRatedPage />} />
        <Route path={Path.NowPlaying} element={<NowPlayingPage />} />
      </Route>
      <Route path={Path.FilteredMovies} element={<FilteredMovies />} />
      <Route path={Path.Search} element={<Search />} />
      <Route path={Path.Favorites} element={<Favorites />} />
      <Route path={Path.Movie} element={<Movie />} />
    </Routes>
  );
};