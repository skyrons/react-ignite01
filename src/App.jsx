import {Post} from './Posts'
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
          <Post 
          produto="Post 1" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum hic earum maiores facere! Soluta rem consequuntur et incidunt quisquam cumque eum neque quos minus voluptatum voluptatem, excepturi eveniet dolorem."
          />
          <Post 
          produto="Post 2" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum hic earum maiores facere! Soluta rem consequuntur et incidunt quisquam cumque eum neque quos minus voluptatum voluptatem, excepturi eveniet dolorem."
          />
        </main>
      </div>
    </div>
  )
}

export default App
