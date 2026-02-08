import './App.module.css'
import {Header} from '@/widgets'
import {Routing} from "@/app/providers/routing";
// import s from './App.module.css'

function App() {

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
