import './App.module.css'
import {Header} from '@/widgets'
import {Routing} from "@/app/providers/routing";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import type { RootState } from '@/app/providers/store/store';
// import s from './App.module.css'

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <>
      <Header />
      {/*<div className={s.container}>*/}
        <Routing />
      {/*</div>*/}
    </>
  )
}

export default App
