import {Path} from "@/app/providers/routing";
import s from "@/entities/ui/MoviesLayout/MoviesLayout.module.css";
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
      <div className={s.container}>
        <div className={s.categoryButtons}>
          {categoryItems.map((item) => (
            <NavLink key={item.label} to={`${item.to}`} className={({isActive}) => isActive ? `${s.categoryBtn} ${s.active}` : s.categoryBtn}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};