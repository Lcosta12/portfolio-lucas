import { styled } from "styled-components";

export const TechSection = styled.section`
background-color: #0C0C0C;
height: 100vh;
margin-top:10vh;
width: 100vw;
&>h1{
    color:white;
    text-align:center;
    font-size:4rem;
    margin-bottom:2rem;
}
`

export const UlTechs = styled.ul`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    color:white;
    width:80%;
    margin-left:10%;
    gap:2rem;
    

    &>li{
        background: #eaefef;
        border-radius:0.7rem;
        list-style:none;
        display: flex;
        /* aligm-items:center; */
        justify-content:center;
        align-items: center;
        flex-direction:column;
        width: 10rem;
        color:#0c0c0c;
        height:8rem;
        
        >img{
            height: 5rem;
            width: 5rem;
            margin-bottom:5px;
            

        }
    }
`