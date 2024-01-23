import { TechSection, UlTechs } from "./style"

import Js from "../../assets/javascript.svg";
import typeScript from "../../assets/typescript.svg";
import css from "../../assets/css.svg";
import html from "../../assets/html.svg";
import react from "../../assets/react.svg";
import mysql from "../../assets/mysql.svg";
import tailwind from "../../assets/tailwindcss.svg";
import git from "../../assets/git.svg";
import style from "../../assets/style.png";
import node from "../../assets/node.svg"
import express from "../../assets/express.svg"
import next from "../../assets/next.svg"


export const Tecnologias =()=>{
    return(
        <TechSection>
            <h1 id="techs">tecnolgias</h1>

            <UlTechs>
                <li> <img src={Js} alt="" />JAVASCRIPT</li>
                <li> <img src={typeScript} alt=""/>TYPESCRIPT</li>
                <li><img src={css} alt="" />CSS</li>
                <li> <img src={html} alt="" />HTML</li>
                <li> <img src={react} alt="" />REACT</li>
                <li> <img src={next} alt="" />NEXT</li>
                <li> <img src={node} alt="" />NODE</li>
                <li> <img src={express} alt="" />EXPRESS</li>
                <li> <img src={mysql} alt="" />MYSQL</li>
                <li> <img src={git} alt="" />GIT</li>
                <li> <img src={style} alt="" />STYLED-COMPONENTS</li>
                <li> <img src={tailwind} alt="" />TAILWIND</li>
                
            </UlTechs>
        </TechSection>
    )
}