import styled from "styled-components"



export const MainContainer = styled.div
`
 color: white;  
 align-itens: center;
 font-size: 30px;

`;
export const Hello = styled.p 
`
 margin-bottom:10px;
 font-size: 20px;
`;

export const NavLink = styled.a``;

export const StyledNavLink = styled(NavLink)
`
 text-decoration: none;
 color: #df3131; 
 &:hover,
 &:focus {
    color: #c22222;
  } &active{
    color: #df3131;  
  }
`;

export const Title = styled.h1
`
 
`;

export const About = styled.p
`
 margin-bottom: 10px;
 font-size: 25px;
`;