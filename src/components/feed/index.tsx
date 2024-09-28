import { BannerContainer, CardTitle, ContainerCards } from "./style";
import { useState, useEffect } from "react";
import backendimage from '../../assets/backend-coding.png';
import frontendimage from '../../assets/ux-design.png';
import projetos from '../../projetos.json'; // Importando o JSON diretamente

interface Projeto {
    name: string;
    tech: string;
    finishedIn: string;
    howdo: string;
    link: string;
    type: string;
}

export default function Feed() {
    const [backgroundImage, setBackgroundImage] = useState<string>('');

    useEffect(() => {
        // Use os dados diretamente
        projetos.forEach((item: Projeto) => {
            if (item.type.toLowerCase() === 'backend') {
                setBackgroundImage(backendimage);
                console.log('backend');
            } else if (item.type.toLowerCase() === 'frontend') {
                setBackgroundImage(frontendimage);
                console.log('frontend');
            }
        });
    }, []);// Chama apenas uma vez ao montar

    return (
        <ContainerCards>
          <BannerContainer></BannerContainer>
            <CardTitle>Vasco</CardTitle>
        </ContainerCards>
    );
}
