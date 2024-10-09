import styled from "styled-components";

export const DivContainer = styled.div`
  justify-content: center;
  align-items: center;
  margin: 1em 0.1em;

  @media (max-width: 1200px) {
    margin: 1em 0.1em;
  }

  @media (max-width: 1024px) {
    margin: 1em 0.1em;
  }

  @media (max-width: 768px) {
    margin: 0.8em 0.1em;
  }

  @media (max-width: 480px) {
    margin: 0.8em 0.1em;
  }

  @media (max-width: 360px) {
    margin: 0.8em 0.1em;
  }
`;

export const DivProjeto = styled.div`
  margin: 1em 20em;
  text-align: left;

  @media (max-width: 1200px) {
    margin: 1em 15em;
  }

  @media (max-width: 1024px) {
    margin: 1em 10em;
  }

  @media (max-width: 768px) {
    margin: 1em 5em;
  }

  @media (max-width: 480px) {
    margin: 1em 2em;
  }

  @media (max-width: 360px) {
    margin: 1em 1em;
  }
`;

export const ProjetosPage = styled.h1`
  color: white;
  display: flex;
  font-size: 4.375em;
  text-align: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 3.125em;
  }

  @media (max-width: 480px) {
    font-size: 2.1875em;
  }
`;

export const ProjetoName = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.875em;

  &:hover,
  &:focus {
    color: #c22222;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 1.5625em;
  }

  @media (max-width: 480px) {
    font-size: 1.25em;
  }
`;

export const ProjetoInfos = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.8125em;
  color: gray;

  @media (max-width: 768px) {
    font-size: 0.75em;
  }

  @media (max-width: 480px) {
    font-size: 0.6875em;
  }
`;

export const ProjetoDescript = styled.p`
  margin: 0.625em 0;
  font-size: 1.3125em;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.125em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

export const NavLink = styled.a``;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #df3131;

  &.active {
    color: #df3131;
  }
`;

export const DivButton = styled.div`
  background: #0e141b;
  display: flex;
  justify-content: center;
  margin-top: 1.25em;

  @media (max-width: 768px) {
    margin-top: 0.9375em;
  }

  @media (max-width: 480px) {
    margin-top: 0.625em;
  }
`;

export const ButtonsStyled = styled.button`
  background: #0e141b;
  color: #df3131;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #df3131;
  border-radius: 3px;

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 0.2em 0.8em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
    margin: 0.5em;
    padding: 0.2em 0.5em;
  }
`;

export const Footer = styled.footer`
  background-color: #0e141b;
  color: white;
  text-align: center;
  padding: 1.5em 0;

  @media (max-width: 768px) {
    padding: 1em 0;
  }

  @media (max-width: 480px) {
    padding: 0.75em 0;
  }
`;

export const Header = styled.header`
  background-color: #df3131;
  color: white;
  text-align: center;
  padding: 1.5em 0;

  @media (max-width: 768px) {
    padding: 1em 0;
  }

  @media (max-width: 480px) {
    padding: 0.75em 0;
  }
`;

export const MainContent = styled.main`
  padding: 2em;

  @media (max-width: 768px) {
    padding: 1.5em;
  }

  @media (max-width: 480px) {
    padding: 1em;
  }
`;

export const Section = styled.section`
  margin: 2em 0;

  @media (max-width: 768px) {
    margin: 1.5em 0;
  }

  @media (max-width: 480px) {
    margin: 1em 0;
  }
`;
