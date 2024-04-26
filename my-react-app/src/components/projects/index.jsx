import kenzieHubDesk from "../../assets/Kenziehub.Desk.png"
import kenzieHubMobile from "../../assets/Kenziehub.mobile.png"
import burguerKenzieMobile from "../../assets/BurguerKenzie.Mobile.png"
import burguerKenzieDesk from "../../assets/BurguerKenzie.Desk.png"
import KenzieMovieMobile from "../../assets/KenzieMovie.Mobile.png"
import KenzieMovieDesk from "../../assets/KenzieMovie.Desk.png"
import { DivProjects, H1Projects, ImgDesk, ImgMobile, ProjectsSection } from "."

export const Projects = () =>{
    
    return(
        <ProjectsSection id="projetos">
       
        <DivProjects>
            <H1Projects>Hamburgueria</H1Projects>
            <a href="https://entrega-s3-template-hamburgueria.vercel.app/" target="Blank">
            <ImgDesk src={burguerKenzieDesk} alt="imagem da Hamburgueria DeskTop" />
            <ImgMobile src={burguerKenzieMobile} alt="imagem da Hamburgueria Mobile" />
            </a>
        </DivProjects>

        <DivProjects>
            <H1Projects>Administrador de tecnologias</H1Projects>
            <a href="https://kenzie-hub-six-sigma.vercel.app/" target="Blank">
            <ImgDesk src={kenzieHubDesk} alt="imagem do kenzieHub DeskTop" />
            <ImgMobile src={kenzieHubMobile} alt="imagem do kenzieHub Mobile" />
            </a>
        </DivProjects>

        <DivProjects>
            <H1Projects>Site de filmes</H1Projects>
            <a href="https://kenzie-academy-brasil-developers-kenzie-academy-allandoalmeida.vercel.app/" target="Blank">
            <ImgDesk src={KenzieMovieDesk} alt="imagem do kenzieMovie DeskTop" />
            <ImgMobile src={KenzieMovieMobile} alt="imagem do kenzieMovie Mobile" />
            </a>
        </DivProjects>
        </ProjectsSection>
    )
}