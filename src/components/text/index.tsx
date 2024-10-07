import {  MainContainer, StyledNavLink, Hello, Title, About } from "./style";


export default function Text(){
    return (
        <MainContainer>
            <Hello><StyledNavLink href="#">
           Olá, eu sou o Gui.
            </StyledNavLink></Hello>
            <Title>Desenvolvedor</Title>
            <About> Sou estudante de Ciência da Computação e estou em busca de me tornar um desenvolvedor fullstack. 
                Agradeço por visitar meu portfólio e espero que você goste do meu trabalho.</About>
        </MainContainer>
    );
}