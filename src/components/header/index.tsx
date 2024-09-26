import { HeaderContainer, ImageProfile, MenuItens, Profile, ProfileContainer } from "./style";
import profileImagem from '../../assets/Profile-.jpeg';

export default function Header() {
    return (
        <HeaderContainer>
            <ProfileContainer>
            <ImageProfile src={profileImagem}    alt = "profile image"/>
            <Profile>Guilherme Becker</Profile>
            </ProfileContainer>
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