import styled from "styled-components";


export const MainContainer = styled.div`


`;
export const HeaderContainer = styled.header `
  display: flex;
  align-items: center; // Centraliza verticalmente os itens
  justify-content: space-between;
  padding: 16px;
`; 
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center; // Alinha verticalmente a imagem e o nome
`;
export const ImageProfile = styled.img`
 display: block;
 border-radius: 50%;
 width: 40px;
 height:40px;

`;

export const Profile = styled.h1 `
 display:flex;
 font-size: 25px;
 color: white;
 padding: 0.9em;


`;


export const MenuItens = styled.ul `
display: flex;
  margin: 0; // Remover margens do UL para centralizar melhor
  li {
    list-style-type: none;
    display: inline-flex;
    margin: 0 15px; // Espaçamento horizontal entre os itens do menu
    color: white;
    font-size: 18px; // Tamanho da fonte dos itens do menu
  }

`;