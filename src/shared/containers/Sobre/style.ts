import styled from "styled-components";


import { propsSobre } from ".";
import { Title } from "../../../styles_Global/style";

export const estiloSobre = styled.section<propsSobre>`
height: 868px;
display: flex;
background-color: ${propsSobre => propsSobre.bgColor };
position: relative;

.sobre{
    &_content{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        max-width: 45%;
        margin-left: ${prospSobre => prospSobre.reverse ? '55%' : '0px'};

        ${Title}{
        font-size: 40px;
        padding-bottom: 20px;
        }
    }
}

.container_images{
    position: absolute;
    width: 50%;
    left: ${prospSobre => prospSobre.reverse ? '0' : 'auto'};
    right: ${prospSobre => prospSobre.reverse ? 'auto' : '0'};
    height: 100%;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        right: 0;

        &.sobre_eu{
            position: absolute;
            height: 600px;
            width: auto;
            bottom: 0;
                left: ${prospSobre => prospSobre.reverse ? 'auto' : '50px'};
    right: ${prospSobre => prospSobre.reverse ? '50px' : 'auto'};
        }
    }
}

`