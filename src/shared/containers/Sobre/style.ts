import styled from "styled-components";


import { propsSobre } from ".";
import { Title } from "../../../styles_Global/style";
import { Color } from "../../../styles_Global/variaveis";

export const estiloSobre = styled.section<propsSobre>`
height: 868px;
background-color: ${propsSobre => propsSobre.bgColor };
position: relative;
display: flex;
flex-direction: ${propsSobre => propsSobre.reverse ? 'row-reverse' : 'row'};

.container_cursos{
    display: flex;
    position: relative;
    height: 470px;

    @media(max-width: 520px){
        height: max-content;
        justify-content: center;
        align-items: center;
    }

    ul{
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px 0px;
        

        li{
            list-style: none;
        }
    }
    

    h3{
        color: ${Color.laranja};
        font-size: 22px;

        &:before{
            position: absolute;
            left: -15px;
            content: '';
            color: ${Color.branco};
            background-color: ${Color.branco};
            border: solid 8px ${Color.laranja};
            height: 22px;
            width: 22px;
            border-radius: 50%;
        }
    }

span{
    height: 100%;
    width: 8px;
    border-radius: 10px;
    background-color: ${Color.laranja};

    @media(max-width: 520px){
        height: 580px;
    }
    
}
}


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
        padding-bottom: 30px;
        
        @media(max-width: 660px){
            font-size: 32px;
            
        }
        }
    }
}

.container_images{
    width: 50%;
    height: 100%;
    position: relative;
    min-height: 600px;
    display: flex;
    overflow: hidden;
    justify-content: center;


    @media(max-width: 930px){
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: bottom;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;


        &.sobre_eu{
            z-index: 100;
            width: 60%;
            height: max-content;
            bottom: 0;
            object-fit: contain;
            margin-bottom: -20px;

            @media(max-width: 930px){
                width: 70%;
                max-height: 600px;
            }

            

            @media(max-width: 550px){
                width: 80%;
            }


        }
    }
}

`