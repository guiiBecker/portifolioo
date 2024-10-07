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
                    <StyledNavLink href="/" ><li>Home</li></StyledNavLink>
                    <StyledNavLink href="" ><li>Projetos</li></StyledNavLink>
                    <StyledNavLink href="about" ><li>About</li></StyledNavLink>
                </ul>
            </MenuItens>
        </HeaderContainer>
    )

}