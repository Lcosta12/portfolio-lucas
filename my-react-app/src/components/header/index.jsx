import { HeaderContainer, ListButtons } from "../header/styles";

export const Header = () => {
  const handleRedirectToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HeaderContainer>
      <ul>
        <ListButtons onClick={handleScrollToTop}>Sobre</ListButtons>
        <ListButtons onClick={() => handleRedirectToSection('projetos')}>Projetos</ListButtons>
        <ListButtons onClick={() => handleRedirectToSection('techs')}>Tecnologias</ListButtons>
      </ul>
    </HeaderContainer>
  );
};