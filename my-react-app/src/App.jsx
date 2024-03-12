

import { Home } from './components/home'
import { Header } from './components/header'
import { Projects } from './components/projects/index.jsx'
import { Tecnologias } from './components/tecnologias'
import { Footer } from './components/footer/index.jsx'

function App() {
 

  return (
    <>
     <Header/>
     <Home/>
     <Projects/>
     <Tecnologias/>
     <Footer/>
    </>
  )
}

export default App
