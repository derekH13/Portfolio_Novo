import styled from "styled-components";
import { Color } from "../../../styles_Global/variaveis";

export const styleHeader = styled.header`
    width: 100%;
    position: fixed;
    z-index: 1000;

    .imagem_nav{
        object-fit: cover;
        wight: 100%;
        height: 580px;
        overflow: hidden;
        clip-path: inset(0px 0px 470px 0px);
        position: absolute;
        transition: all .4s;
        width: 100%;
        z-index: -1;
    }

nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;

    ul{
        display: flex;
        gap: 44px;
        font-size: 20px;
        font-weight: 400;
        align-items: center;

        li{
            
        .link{
            padding-bottom: 4px;
            border-bottom: solid 2px transparent;
            transition: all 0.4s ease;

            &:hover{
                border-bottom: solid 2px ${Color.laranja};
                color: ${Color.laranja};
                font-weight: 400;
            }
         }
         }

    }

    .logo{
        display: flex;
        align-items: center;
        gap: 16px;

        h5{
            color: ${ Color.branco };
             display: flex;
             gap: 8px;
             font-weight: 200;
             font-size: 20px;

            span{
                font-weight: 700;
            }
        }
    }
}

`