import styled from "styled-components";
import { Color } from "../../../styles_Global/variaveis";
import { ButtonPrimary } from "../../../styles_Global/style";

export type props = {
    flexRevers: boolean
} 

export const estilo = styled.div<props>`
display: flex;
flex-direction: ${props => props.flexRevers ? 'row-reverse' : 'row'};
  gap: 40px;

.cardProjeto_content{
    display: flex;
    flex-direction: column;

    &_btn{
      display: flex;
      gap: 18px;
      padding-top: 40px;

      ${ButtonPrimary}{
        width: 200px;
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



img{
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.cardProjeto_tecnologias{
    display: flex;
    gap: 18px;
    padding-top: 12px;
    flex-wrap: wrap; 
    width: 100%;


    span{
        background-color: ${Color.laranja};
        border-radius: 13px;
        
        height: 30px;
        padding: 0px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
}

`