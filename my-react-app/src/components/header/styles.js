import styled from "styled-components"; 

export const HeaderContainer = styled.header`
position:fixed;
background-color:#0C0C0C;
top:0;
left:0;
right:0;
height:8vh;
display:flex;
justify-content:space-around;   
z-index:5;
flex-direction: row;
flex-wrap: wrap;
align-content: center;
align-items: center;
font-size:16px;

&>h1{
    color:white;
}

&>ul{
    display:flex;
    gap:2rem;
    font-size:14px;
    
}`

export const ListButtons = styled.li`
display:flex;  
cursor:pointer;
color:white;

`