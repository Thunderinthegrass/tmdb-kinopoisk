import './App.module.css'
import {Header} from '@/widgets'
import {Routing} from "@/app/providers/routing";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import type { RootState } from '@/app/providers/store/store';
import {Footer} from "@/widgets/Footer/Footer.tsx";
import s from './App.module.css'

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <div className={s.app}>
      <Header />
      <div className={s.mainContainer}>
        <Routing />
      </div>
      <Footer />
    </div>
  )
}

export default App
