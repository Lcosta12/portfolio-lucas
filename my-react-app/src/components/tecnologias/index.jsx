import Js from "../../assets/javascript.svg";
import typeScript from "../../assets/typescript.svg";
import css from "../../assets/css.svg";
import html from "../../assets/html.svg";
import react from "../../assets/react.svg";
import mysql from "../../assets/mysql.svg";
import tailwind from "../../assets/tailwindcss.svg";
import git from "../../assets/git.svg";
import style from "../../assets/style.png";
import node from "../../assets/node.svg";
import express from "../../assets/express.svg";
import next from "../../assets/next.svg";
import { TechSection, TechItemWrapper, TechItemCard } from "./style.js";

export const Tecnologias = () => {
  return (
    <TechSection id="techs">
      <TechItemWrapper>
        <TechItemCard>
          <img src={Js} alt="Javascript" />
          <p>JAVASCRIPT</p>
        </TechItemCard>
        <TechItemCard>
          <img src={typeScript} alt="Typescript" />
          <p>TYPESCRIPT</p>
        </TechItemCard>
        <TechItemCard>
          <img src={css} alt="CSS" />
          <p>CSS</p>
        </TechItemCard>
        <TechItemCard>
          <img src={html} alt="HTML" />
          <p>HTML</p>
        </TechItemCard>
        <TechItemCard>
          <img src={react} alt="React" />
          <p>REACT</p>
        </TechItemCard>
        <TechItemCard>
          <img src={next} alt="Next.js" />
          <p>NEXT.JS</p>
        </TechItemCard>
        <TechItemCard>
          <img src={node} alt="Node.js" />
          <p>NODE.JS</p>
        </TechItemCard>
        <TechItemCard>
          <img src={express} alt="Express.js" />
          <p>EXPRESS.JS</p>
        </TechItemCard>
        <TechItemCard>
          <img src={mysql} alt="MySQL" />
          <p>MYSQL</p>
        </TechItemCard>
        <TechItemCard>
          <img src={git} alt="Git" />
          <p>GIT</p>
        </TechItemCard>
        <TechItemCard>
          <img src={style} alt="Styled-components" />
          <p>STYLED-COMPONENTS</p>
        </TechItemCard>
        <TechItemCard>
          <img src={tailwind} alt="Tailwind" />
          <p>TAILWIND</p>
        </TechItemCard>
      </TechItemWrapper>
    </TechSection>
  );
};
