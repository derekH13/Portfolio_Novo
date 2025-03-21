import styled from "styled-components";
import { Color } from "../../../styles_Global/variaveis";
import { Texto, Title } from "../../../styles_Global/style";

export const StyleHome = styled.section`
background-color: ${Color.preto};


.imagem_eu{
    height: 544px;
    z-index: 1;

    @media(max-width: 1080px){
        height: auto;
        max-width: 380px;
        width: 100%;
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
                padding-top: 120px;
            flex-direction: column;
        }
    }

    &_content{
        display: flex;
        flex-direction: column;
        gap: 8px;   
        max-width: 600px;
        position: relative;

        @media(max-width: 1080px){
            align-items: center;
        }

        ${Title}{
            @media(max-width: 1080px){
                text-align: center;
            }
        }


        ${Texto}{
        margin-bottom: 28px;

        @media(max-width: 1080px){
            text-align: center;
        }
        }

    }
}
`