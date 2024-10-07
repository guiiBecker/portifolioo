import styled from "styled-components";



export const HeaderContainer = styled.header `
  display: flex;
  align-items: center; 
  justify-content: space-between;
  padding: 16px;
`; 
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center; 
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
  margin: 0; 
  li {
    list-style-type: none;
    display: inline-flex;
    margin: 0 15px; 
    color: white;
    font-size: 18px; 
    &:hover,
    &:focus {
     color: #c22222;
     text-decoration: underline;
     transition:
      transform: 0.3s ease;
      
  }
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