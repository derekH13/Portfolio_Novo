import styled from "styled-components";
import { ButtonPrimary } from "../../../styles_Global/style";

export type props = {
    flexRevers: boolean
} 

export const estilo = styled.div<props>`
display: flex;
flex-direction: ${props => props.flexRevers ? 'row-reverse' : 'row'};
  gap: 40px;

  @media(max-width: 1000px){
    flex-direction: column;
    width: 95%;
  margin: 0 auto;
  }

.cardProjeto_content{
    display: flex;
    flex-direction: column;

    &_btn{
      display: flex;
      gap: 18px;
      padding-top: 40px;



      ${ButtonPrimary}{
        width: 200px;

        @media(max-width: 470px){
          width: auto;
          padding: 0px 20px;
          }
      }
    }

    .info{
       display: flex;
        flex-direction: column;
        gap: 10px;
    }
}



.cardProjeto_imagem{
  min-width: 500px;


  @media(max-width: 1000px){
      width: 100%;
      min-width: auto;
  }


img{
    width: 100%;
    height: 300px;
    object-fit: cover;

    @media(max-width: 1000px){
      height: auto;
      margin: 0 auto;
  }
}

.cardProjeto_tecnologias{
    display: flex;
    gap: 18px;
    padding-top: 12px;
    flex-wrap: wrap; 
    width: 100%;


    span{
        border: solid 2px;
        border-radius: 13px;
        
        height: 30px;
        padding: 0px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 300;

              
        &.javascript {
          border-color: rgb(239, 255, 14);
          color: rgb(239, 255, 14);
        }
        &.bootstrap {
          border-color: rgb(87, 27, 184);
          color: rgb(87, 27, 184);
        }
        &.react {
          border-color: rgb(45, 171, 255);
          color: rgb(45, 171, 255);
        }
        &.typescript {
          border-color: rgb(8, 3, 255);
          color: rgb(8, 3, 255);
        }
        &.html {
          border-color: rgb(184, 85, 27);
          color: rgb(184, 85, 27);
        }
        &.tailwindcss {
          border-color: rgb(57, 159, 177);
          color: rgb(57, 159, 177);
        }
        &.bootstrap {
          border-color: rgb(87, 27, 184);
          color: rgb(87, 27, 184);
        }
        &.css {
          border-color: rgb(21, 82, 248);
          color: rgb(0, 64, 241);
        }
        &.django {
          border-color: rgb(207, 93, 0);
          color: rgb(207, 93, 0);
        }
        &.styled-components {
          border-color: rgb(0, 222, 238);
          color: rgb(0, 222, 238);
        }
        &.tailwindcss {
          border-color: rgb(87, 27, 184);
          color: rgb(87, 27, 184);
        }
        &.mysql {
          border-color: rgb(87, 27, 184);
          color: rgb(87, 27, 184);
        }
    }
}
}

`