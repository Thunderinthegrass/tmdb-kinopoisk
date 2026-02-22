import s from "./Header.module.css"
import {Path} from "@/app/providers/routing"
import {Link, NavLink} from "react-router-dom";
import logo from "@/shared/assets/logo.svg"
import {ToggleThemeBtn} from "@/entities/ui/ToggleThemeBtn/ToggleThemeBtn.tsx";

export const Header = () => {

  const navItems = [
    {to: Path.Main, label: "Main"},
    {to: Path.MoviesLayout, label: "Category Movies"},
    {to: Path.FilteredMovies, label: "Filtered Movies"},
    {to: Path.Search, label: "Search"},
    {to: Path.Favorites, label: "Favorites"},
  ]
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link className={s.logo} to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav className={s.mainNav}>
          <ul className={s.navItems}>
            {navItems.map((item) => (
              <li key={item.to} className={s.navItem}>
                <NavLink to={item.to} className={({isActive}) => isActive ? `${s.navLink} ${s.active}` : s.navLink}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ToggleThemeBtn />
      </div>
    </header>
  );
};