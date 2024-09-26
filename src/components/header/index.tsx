import { HeaderContainer, ImageProfile, MenuItens, Profile } from "./style";

export default function Header() {
    return (
        <HeaderContainer>
            <ImageProfile>
                <img src="../public/assets/profile.jpeg"></img>
            </ImageProfile>
            <Profile>Guilherme Becker</Profile>
            <MenuItens>
                <ul>
                    <li>Home</li>
                    <li>Projetos</li>
                    <li>About</li>
                </ul>
            </MenuItens>
        </HeaderContainer>
    )

}