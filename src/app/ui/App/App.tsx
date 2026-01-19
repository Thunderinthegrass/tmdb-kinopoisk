import './App.module.css'
import {Header} from '@/common/components'
import {Routing} from "@/common/routing";
import s from './App.module.css'

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
