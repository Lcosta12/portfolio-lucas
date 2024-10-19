import { Banner } from "../components/banner/index.jsx"
import { Footer } from "../components/footer/index.jsx"
import { Header } from "../components/header/index.jsx"
import { Projects } from "../components/projects/index.jsx"
import { Tecnologias } from "../components/tecnologias/index.jsx"

export const Home= () => {
 

  return (
    <>
     <Header/>
     <Banner/>
     <Projects/>
     <Tecnologias/>
    </>
  )
}

