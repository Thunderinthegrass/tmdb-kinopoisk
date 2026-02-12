import {useDispatch, useSelector} from "react-redux";
import {toggleTheme} from "@/entities/movie/model/themeSlice.ts";
import type { RootState } from '@/app/providers/store/store';
import s from "./ToggleThemeBtn.module.css";
import darkIcon from "@/shared/assets/dark-icon.svg";
import lightIcon from "@/shared/assets/light-icon.svg";

export const ToggleThemeBtn = () => {

  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <button className={s.toggleThemeBtn} onClick={() => {dispatch(toggleTheme())}}>
      {
        theme === "light" ?
          <img className={s.darkIcon} src={darkIcon}
             alt="иконка смены темы" /> :
          <img className={s.lightIcon} src={lightIcon}
               alt="иконка смены темы" />
      }
    </button>
  );
};