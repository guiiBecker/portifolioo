import {  MainContainer, Link, Hello, Title, About } from "./style";


export default function Text(){
    return (
        <MainContainer>
            <Hello><Link href="#">
            Hello, I'm Gui
            </Link></Hello>
            <Title>Developer</Title>
            <About> Sou estudante de Ciência da Computação e estou em busca de me tornar um desenvolvedor focado em back-end. 
                Agradeço por visitar meu portfólio e espero que você goste do meu trabalho.</About>
        </MainContainer>
    );
}