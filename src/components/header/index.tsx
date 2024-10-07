import { HeaderContainer, ImageProfile, MenuItens, Profile, ProfileContainer, StyledNavLink } from "./style";
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
                    <StyledNavLink href="/" ><li>Início</li></StyledNavLink>
                    <StyledNavLink href="/projetos" ><li>Projetos</li></StyledNavLink>
                    <StyledNavLink href="/about" ><li>Sobre</li></StyledNavLink>
                </ul>
            </MenuItens>
        </HeaderContainer>
    )

}