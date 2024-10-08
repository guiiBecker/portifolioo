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

const ITEMS_PER_PAGE = 8;

export default function ProjetosFeed(){
    const [projetos, setProjetos] =  useState <Projeto[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('/projetos.json')
            const data = await response.json();

            console.log(data);

            setProjetos(data.projetos);
        };
        fetchData();
    }, []); // fim do data projetos

    const totalPages = Math.ceil(projetos.length/ITEMS_PER_PAGE);
    

    const currentProjects = projetos.slice(
        (currentPage -1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

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
                <div>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}>
                        Anterior
                    </button>
                    <span>{` Página ${currentPage} de ${totalPages} `}</span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}>
                        Próximo
                    </button>
                </div>
            </DivContainer>
           
    );


};


export {}