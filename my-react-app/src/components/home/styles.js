import styled from "styled-components";

export const HomeSection = styled.section`
  background: #0c0c0c;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease 0s;
  color: white;

  
`;

export const DivHome = styled.div`
  width: 65rem;
  display: flex;
  flex-direction: column;

  &>span{
    font-size: 11rem;
    font-weight: 800;
    font-family: boldstrom;
  }

  &>h2{
    margin-left:38%;
    @media (max-width: 600px) {
      margin-left:0;
      margin-top:2rem;
    }
  }


  &>p{
    font-size: 2.2rem;
    line-height:8rem;

    >img{
      height:2rem;
    }

  }

  @media (max-width: 500px) {
    width: 80%;
       >span{
        font-size:4rem;
       }
    }
   
`;

export const Contact = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 12%;


  > img {
    height: 5rem;
    margin-left: 10%;
    margin-right:1rem;
    image-rendering: pixelated;
  }

  @media (max-width: 700px) {
  margin-bottom:0 ;

  }
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  line-height:1rem;
`;
