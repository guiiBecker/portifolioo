import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components"

interface StyledDivProps{
    hoverImage: string;
}
export const ContainerCards = styled.div
`
 width: 300px;
 border-radius: 8px;
 box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
 overflow: hidden;
 min-width: 300px;
 min-height: 300px;
 display: inline-flex;
 flex-wrap: wrap;
 margin:10px;
 position:relative;
`;
export const BannerContainer = styled.div<StyledDivProps>
`
 display: flex;
 position: relative;
 height: 100px;
 width: 300px;
 background-color: #0000ff;
 background-size: cover;
 background-position: center;
 flex-direction: column;
 justify-content: space-around;
 padding: 16px;

 cursor: pointer;
 transition: 
  box-shadow 0.3s ease, 
  transform 0.3s ease, 
  background-color 0.3s ease, 
  opacity 0.3s ease;

 &:hover{
  opacity: 0.9; 
  background-color: white;
 }
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 30px;
    bottom: 0;
    background-image: url(${(props) => props.hoverImage});
    justify-content: center;
    align-itens:center;
    background-size: 25%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.7;
  }
`;
export const CardInfos = styled.div
`
 margin:0;
 padding-top: 0;
 display: flex: 
 align-itens: left;
`;
export const CardTitle = styled.p
`
 margin:0;
 color: white;
 padding: 7px;
 font-size: 20px;
`;
export const CardParagh = styled.p 
`
 color:white;
 font-size: 15px;
 margin:0;
 padding-top: 5px;
 padding-left: 10px;
`;
export const StyledLink = styled.a
``;

export const StyledDivExt = styled.div
`
 margin-left: 50px;
`;
