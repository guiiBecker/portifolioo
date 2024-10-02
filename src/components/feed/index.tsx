import { BannerContainer, CardInfos, CardParagh, CardTitle, ContainerCards, StyledLink } from "./style";
import { useState, useEffect } from "react";
import backendimage from '../../assets/backend-coding.png';
import frontendimage from '../../assets/ux-design.png';
import { error } from "console";
import GithubImage from '../../assets/github.png'

interface Projeto {
    name: string;
    tech: string;
    finishedIn: string;
    howdo: string;
    link: string;
    type: string;
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

        }, []);// fim useEfect
        return(
            <div>
            {projetos.map((projeto: Projeto, index: number) => (
                <ContainerCards>
                    <StyledLink href={projeto.link} target="_blank">
                    <BannerContainer hoverImage={GithubImage}></BannerContainer>
                    </StyledLink>
                    <CardInfos>
                        <CardTitle>{projeto.name}</CardTitle>
                        <CardParagh>{projeto.tech}</CardParagh>
                        <CardParagh>{projeto.type}</CardParagh>
                        <CardParagh>{projeto.finishedIn}</CardParagh>
                    </CardInfos>
                </ContainerCards>
            ))}
            </div>

        )
    }

