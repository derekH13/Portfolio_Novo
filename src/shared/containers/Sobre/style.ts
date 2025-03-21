import styled from "styled-components";


import { propsSobre } from ".";
import { Title } from "../../../styles_Global/style";

export const estiloSobre = styled.section<propsSobre>`
height: 868px;
background-color: ${propsSobre => propsSobre.bgColor };
position: relative;
display: flex;
flex-direction: ${propsSobre => propsSobre.reverse ? 'row-reverse' : 'row'};

@media(max-width: 930px){
    flex-direction: column;
    height: max-content;
}

.sobre{
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;

    @media(max-width: 930px){
        width: 100%;
        padding: 40px 0px;
    }



    &_content{
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 0px 20px;
        justify-content: center;
        max-width: 560px;
        

        ${Title}{
        font-size: 40px;
        padding-bottom: 20px;
        }
    }
}

.container_images{
    width: 50%;
    height: 100%;
    position: relative;
    min-height: 600px;


    @media(max-width: 930px){
        width: 100%;
        display: flex;
        justify-content: center;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;


        &.sobre_eu{
            z-index: 100;
            position: absolute;
            height: 600px;
            width: auto;
            bottom: 0;
            right: 0;

            @media(max-width: 930px){
                bottom: auto;
                right: auto;
                margin: 0 auto;
            }


        }
    }
}

`