import { BannerContainer, CardInfos, CardParagh, CardTitle, ContainerCards, StyledLink, StyledDivExt } from "./style";
import { useState, useEffect } from "react"; 
import GithubImage from '../../assets/github.png'


interface Projeto {
    name: string;
    tech: string;
    finishedIn: string;
    howdo: string;
    link: string;
    type: string;
    text: string;
    image:string;
}

export default function Feed (){
   
        const [projetos, setProjetos] = useState <Projeto[]>([]);

        useEffect(() =>{
            const fetchData = async() =>{
                const response = await fetch('/projetos.json')
                const data = await response.json();


            setProjetos(data.projetos);
            };

            fetchData();

        }, []);// fim do data projetos


        const sortedProjetos = projetos.sort((a, b) => {
            const [monthA, yearA] = a.finishedIn.split('/').map(Number);
            const [monthB, yearB] = b.finishedIn.split('/').map(Number);
            
            
            const dateA = yearA * 12 + monthA; 
            const dateB = yearB * 12 + monthB; 
    
            return dateB - dateA; 
        });
        return(
            <StyledDivExt>
            {sortedProjetos.slice(0, 8).map((projeto: Projeto, index: number) => (
                <ContainerCards>
                    <StyledLink href={projeto.link} target="_blank">
                    <BannerContainer image={projeto.image} hoverImage={GithubImage}>
                    </BannerContainer>
                    </StyledLink>
                    <CardInfos>
                        <CardTitle>{projeto.name}</CardTitle>
                        <CardParagh>{projeto.tech}</CardParagh>
                        <CardParagh>{projeto.type}</CardParagh>
                        <CardParagh>{projeto.finishedIn}</CardParagh>
                    </CardInfos>
                </ContainerCards>
            ))}
            </StyledDivExt>

        )
    }

