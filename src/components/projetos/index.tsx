import { useEffect, useState } from "react";
import { DivContainer, DivProjeto, ProjetoDescript, ProjetoName, StyledNavLink, ProjetoInfos, ProjetosPage } from "./styles";


interface Projeto{
    name: string;
    tech: string;
    finishedIn: string;
    howdo: string;
    link: string;
    type: string;
    text: string;
};


export default function ProjetosFeed(){
    const [projetos, setProjetos] =  useState <Projeto[]>([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('/projetos.json')
            const data = await response.json();

            console.log(data);

            setProjetos(data.projetos);
        };
        fetchData();
    }, []); // fim do data projetos

    return(   
            <DivContainer>
                <ProjetosPage>Projetos</ProjetosPage>
            {projetos && projetos.length > 0 ? (
                projetos.map((projeto:Projeto, index: number) => (
                    <DivProjeto key={index}>
                        <StyledNavLink href={projeto.link}>
                            <ProjetoName>{projeto.name}</ProjetoName>
                        </StyledNavLink>
                        <ProjetoInfos>{projeto.finishedIn} ⋅ {projeto.tech} </ProjetoInfos>
                        <ProjetoDescript>{projeto.text}</ProjetoDescript>

                    </DivProjeto>
            ))
        ):(
            <ProjetoDescript>Sem projetos disponiveis</ProjetoDescript>
        )}
            </DivContainer>
    );


};


export {}