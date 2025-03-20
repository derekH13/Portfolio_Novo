import styled, { createGlobalStyle } from "styled-components";
import { propsTitle } from "../interface/interface";
import { Color } from "./variaveis";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  .ladding-page{
    background-color: ${Color.preto};
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: ${Color.branco};
  }

  .interface{
    max-width: 1080px;
    width: 98%;
    margin: 0 auto;
  }
`

export const Title = styled.h1<propsTitle>`
    color: ${propsTitle => propsTitle.color ? propsTitle.color : Color.branco};
    font-size: 58px;
    font-weight: 700;
    position: relative;
    

    &:after{
      position: absolute;
      transform: translateX(17px);
      content:'h1';
      font-size: 28px;
      bottom: 5px;
      color:  ${propsTitle => propsTitle.tag ? Color.laranja : 'transparent'};
      font-family: "Leckerli One", cursive;
      }

    &:before{
      position: absolute;
      transform: translateX(-47px);
      content:'h1';
      font-size: 28px;
      top: 27px;

      color:  ${propsTitle => propsTitle.tag ? Color.laranja : 'transparent'};
      font-family: "Leckerli One", cursive;
    }

    span{
        color: ${propsTitle => propsTitle.spanColor ? propsTitle.spanColor : Color.laranja};
    }
    @media(max-width: 1080px){
      font-size: 48px;
    }
`

export const TitleSmall = styled(Title)`
    font-size: 32px;
    font-weight: ${props => props.bold ? '700' : '200'};

    span{
        font-weight: 700;
         color: ${props => props.spanColor ? props.spanColor : Color.laranja};
    }

`

export const Texto = styled.p<propsTitle>`
  font-size: 18px;
  font-weight: 100;
  color: ${propsTitle => propsTitle.color  ? propsTitle.color : Color.branco};
  line-height: 26px;
`

export const ButtonPrimary = styled.button`
  border: none;
  color: ${Color.branco};
  height: 55px;
  padding: 0px 15px;
  border-radius: 2000px;
  background: transparent;
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
    transition: all .4s ease;

  font-size: 18px;
  font-weight: 500;

  &:hover{
    background-color: transparent;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
}
`

export const ButtonSmall = styled.button`
  height: 30px;
  padding: 0px 8px;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 500;
  color: ${Color.preto}; 
  transition: all .4s ease;
  border: solid 1px transparent;
  background-color: rgba(255, 255, 255, 0.7);


&:hover{
  border: solid 1px rgba(255, 255, 255, 0.4);
  background-color: transparent;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
}
`