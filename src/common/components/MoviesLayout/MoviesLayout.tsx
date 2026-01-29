import {Path} from "@/common/routing";
import s from "@/common/components/MoviesLayout/MoviesLayout.module.css";
import {NavLink, Outlet} from "react-router-dom";

export const MoviesLayout = () => {

  const categoryItems = [
    {to: Path.Popular, label: "Popular"},
    {to: Path.TopRated, label: "Top Rated"},
    {to: Path.Upcoming, label: "Upcoming"},
    {to: Path.NowPlaying, label: "Now Playing"},
  ]

  return (
    <div>
      <div className={s.categoryButtons}>
        {categoryItems.map((item) => (
          <NavLink to={`${item.to}`} className={({isActive}) => isActive ? `${s.categoryBtn} ${s.active}` : s.categoryBtn}>
            {item.label}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};