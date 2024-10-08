import { StyledLink } from "../../feed/style";
import { ButtonStyled, DivButton, NavLink } from "./style";



export default function ButtonHomePage(){
    return(
        <DivButton>
                 
                <ButtonStyled as={NavLink} href="/projetos">
                    Veja mais
                </ButtonStyled>
           
        </DivButton>
    );
};











export {}