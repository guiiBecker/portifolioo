import { useEffect, useState } from "react";
import { DivContainer, DivProjeto, ProjetoDescript, ProjetoName, StyledNavLink, ProjetoInfos, ProjetosPage, ButtonsStyled, DivButton } from "./styles";

interface Projeto {
    name: string;
    tech: string;
    finishedIn: string;
    howdo: string;
    link: string;
    type: string;
    text: string;
};

const ITEMS_PER_PAGE = 8;

export default function ProjetosFeed() {
    const [projetos, setProjetos] = useState<Projeto[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/projetos.json');
            const data = await response.json();

            setProjetos(data.projetos);
        };
        fetchData();
    }, []);

    // Ordena os projetos por data
    const sortedProjetos = projetos.sort((a, b) => {
        const [monthA, yearA] = a.finishedIn.split('/').map(Number);
        const [monthB, yearB] = b.finishedIn.split('/').map(Number);

        const dateA = yearA * 12 + monthA;
        const dateB = yearB * 12 + monthB;

        return dateB - dateA; // Ordenação decrescente
    });

    // Cálculo da paginação
    const totalPages = Math.ceil(sortedProjetos.length / ITEMS_PER_PAGE);

    // Obtenção dos projetos da página atual
    const currentProjects = sortedProjetos.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <DivContainer>
            <ProjetosPage>Projetos</ProjetosPage>
            {currentProjects && currentProjects.length > 0 ? (
                currentProjects.map((projeto: Projeto, index: number) => (
                    <DivProjeto key={index}>
                        <StyledNavLink href={projeto.link}>
                            <ProjetoName>{projeto.name}</ProjetoName>
                        </StyledNavLink>
                        <ProjetoInfos>{projeto.finishedIn} ⋅ {projeto.tech} </ProjetoInfos>
                        <ProjetoDescript>{projeto.text}</ProjetoDescript>
                    </DivProjeto>
                ))
            ) : (
                <ProjetoDescript>Sem projetos disponíveis</ProjetoDescript>
            )}

            {/* Paginação */}
            <DivButton>
                <ButtonsStyled
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}>
                    Anterior
                </ButtonsStyled>
                <ButtonsStyled
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}>
                    Próximo
                </ButtonsStyled>
            </DivButton>
        </DivContainer>
    );
}
