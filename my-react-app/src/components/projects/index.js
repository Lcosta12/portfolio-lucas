import {styled} from "styled-components";

export const ProjectsSection = styled.section`
display: flex;
    flex-direction: column;
    background-color: #eaefef;
    width: 100vw;
    gap: 5rem;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

  &>div>p{
    color:red;
  }

  @media (max-width: 700px) {
    flex-direction: row;
       
      }
     
  
`

export const DivProjects = styled.div`
  display: flex;
  flex-direction:column;
  margin-top:2rem;
  height:40rem;
  width: 65rem;
  margin-bottom:10rem ;

  @media (max-width: 700px) {
    margin-bottom:0;
    height:22rem;
    width: 94%;

  }
`;

export const H1Projects = styled.h1`
color:black;
font-size:2rem;
margin-bottom:1rem;
text-align:center;
font-weight:700;
`

export const ImgDesk = styled.img`
  height: 38rem;
  width: 66rem;
  z-index:1;

  @media (max-width: 700px) {
       
    width: 70%;
    height: auto;
    }
`;

export const ImgMobile = styled.img`
  height: 26rem;
  width: 14rem;
  top: -28rem;
  left: 50rem;
  position: relative;
  z-index: 2; 
  transform: scale(1);

  &:hover {
    transform: scale(1.2); 
  }

  @media (max-width: 700px) {
    width: 25%;
    height:auto;
    max-height: 163px;
       left:0;
       top:0;
      }
`;
