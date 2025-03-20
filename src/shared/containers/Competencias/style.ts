import styled from "styled-components"
import { Color } from "../../../styles_Global/variaveis"

export const estiloCompetencias = styled.section`
min-height: 100vh;
padding-top: 100px;

.competencias_tecnologias{

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px;

    &_card{
    padding: 20px;
    border-radius: 30px;


    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    img{
        width: 80%;
    }
    }
}

.tab_competancias{
    padding-top: 20px;
    display: flex;
    gap: 30px;


    button{
        border: none;
        border-radius: 20px;
        height: 40px;
        width: 100px;
        font-size: 20px;
        font-weight: 200;
        color: ${Color.branco};
        background-color: transparent;
        border-bottom: solid 2px transparent;
     
        border-right: solid 1px white;
        border-left: solid 1px white;

        cursor: pointer;
        transition: all .3s ease;

        &:hover{
        border-bottom: solid 2px ${Color.laranja};
        }
    }

}
`