import styled from "styled-components"

export const DivContainer = styled.div
`

 justify-content: center;
 align-itens: center;
 margin: 10px 100px 10px 100px;
`;
export const DivProjeto = styled.div
`
 margin: 10px 300px 10px 300px;
 align-text: left;
`;
export const ProjetosPage = styled.h1 
`
 color: white; 
 display:flex;
 Font-size: 70px;
 align-text: center;
 justify-content: center;
`;
export const ProjetoName = styled.h3
`
 margin: 0px;
 padding:0px;
 font-size: 30px;
 &:hover,
    &:focus {
     color: #c22222;
     transition:
      transform: 0.3s ease;
  }
`;
export const ProjetoInfos = styled.p
`
 margin: 0px;
 padding:0px;
 font-size: 13px;
 color: gray;
`;
export const ProjetoDescript = styled.p
`
 margin: 10px 0px 10px 0px;
 font-size: 21px; 
 color: white;
`;
export const NavLink = styled.a``;
export const StyledNavLink = styled(NavLink)
`
 text-decoration: none;
 color: #df3131; 
 
  } &active{
    color: #df3131;
  }
`;
export const DivButton = styled.div
`
 background:#0e141b;
 display: flex;
 justify-content: center; 
 margin-top: 20px; 
`;
export const ButtonsStyled = styled.button
`
 background:#0e141b;
 color:  #df3131;
 font-size: 1em;
 margin: 1em;
 padding: 0.25em 1em;
 border: 1px solid #df3131;
 border-radius: 3px;
`;