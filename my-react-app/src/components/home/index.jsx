import { HomeSection, DivHome, Contact, DivTitle } from "./styles";

import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import File from "../../assets/file.png"
import ola from "../../assets/ola.png"

export const Home = () => {
  return (
    <HomeSection>
      <DivHome>
        <p>
          Oi,Eu sou Lucas <img src={ola} alt="Harp" />
        </p>

        <span> 
          <DivTitle> 
            WEB <Contact href="https://github.com/Lcosta12" target="_blank"> <img src={github} alt="imagem do github"/> </Contact> 
            <Contact href="https://www.linkedin.com/in/lucas-costa-lkd/" target="_blank"> <img src={linkedin} alt="imagem do github"/> </Contact> 
            <Contact href="https://docs.google.com/document/d/1xOwK3ETv5PzOKQxsskitf8XVixh-of00OqIju78Um90/edit?usp=sharing" target="_blank"> <img src={File} alt="curriculo"/> </Contact> 
          </DivTitle>
        DEVELOPER 
        </span>

        

      </DivHome>
    </HomeSection>
  );
};
