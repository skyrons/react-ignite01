import {Post} from './Posts'
import { Header } from './components/Header.JSX'

import './global.css'
function App() {

  return (
    <div>
      <Header />
      <Post 
        produto="Post 1" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum hic earum maiores facere! Soluta rem consequuntur et incidunt quisquam cumque eum neque quos minus voluptatum voluptatem, excepturi eveniet dolorem."
        />
        <Post 
        produto="Post 2" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum hic earum maiores facere! Soluta rem consequuntur et incidunt quisquam cumque eum neque quos minus voluptatum voluptatem, excepturi eveniet dolorem."
        />
    </div>
  )
}

export default App
