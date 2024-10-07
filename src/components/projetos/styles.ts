import styled from "styled-components"




export const DivContainer = styled.div
`
 justify-content: center;
 align-itens: center;
 margin: 10px 100px 10px 100px;
`;


export const DivProjeto = styled.div
`
 margin: 10px 100px 10px 100px;

 align-text: left;

`;
export const ProjetoName = styled.h3
`
 margin: 0px;
 padding:0px;
 font-size: 20px;
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
 font-size: 11px;
 color: gray;
`;
export const ProjetoDescript = styled.p
`
 margin: 10px 0px 10px 0px;
 font-size: 17px; 
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


export {}