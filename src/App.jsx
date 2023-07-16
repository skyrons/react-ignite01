import { Post } from './components/Posts'
import { Header } from './components/Header.JSX'
import { Sidebar } from './components/Sidebar'

import './global.css'
import style from './App.module.css'


function App() {

  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <aside>
          <Sidebar></Sidebar>
        </aside>

        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
