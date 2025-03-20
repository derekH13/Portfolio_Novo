import styled from "styled-components";
import { Color } from "../../../styles_Global/variaveis";
import { Texto } from "../../../styles_Global/style";

export const StyleHome = styled.section`
background-color: ${Color.preto};


.imagem_eu{
    height: 544px;
    z-index: 1;

    @media(max-width: 1080px){
        height: auto;
        width: 70%;
    }
}

.blur_fundo{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    width: 850px;
    
    @media(max-width: 1080px){
        width: 80%;
    }

}

.home{
    &_container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 200px;

        @media(max-width: 1080px){
            flex-direction: column;
        }
    }

    &_content{
        display: flex;
        flex-direction: column;
        gap: 8px;   
        max-width: 600px;
        position: relative;

        ${Texto}{
        margin-bottom: 28px;
        }

    }
}
`