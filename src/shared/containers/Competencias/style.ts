import styled from "styled-components"
import { Color } from "../../../styles_Global/variaveis"

export const estiloCompetencias = styled.section`
min-height: 100vh;
padding-top: 100px;

.competencias_tecnologias{
    margin-top: 50px;
    margin-bottom: 120px;
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(162px, 163PX));
    gap: 20px;
    
    @media(max-width: 630px){
        bottom: auto;
        right: auto;
        margin: 0 auto;
        justify-content: center;
    }

    &_card{
        padding: 20px;
        border-radius: 30px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        border-left: 1px solid rgba(255, 255, 255, 0.1);

        display: flex;
        flex-direction: column;
        gap: 18PX;
        justify-content: center;

        h5{
        color: ${Color.branco};
        font-size: 20px;
        font-WEIGHT: 500;
        text-align: center;
        }

    img{
        max-width: 80%;
        height: 100px;
        margin: 0 auto;
 
        
    }
    }
}

.tab_competancias{
    padding-bottom: 40px;
    padding-top: 20px;
    display: flex;
    gap: 30px;
     flex-wrap: wrap;


    button{
        border: none;
        border-radius: 20px;
        height: 40px;
        min-width: 100px;
        padding: 0px 5px;
        font-size: 20px;
        font-weight: 200;
        color: ${Color.branco};
        background-color: transparent;
        border-bottom: solid 2px transparent;
     
        border-right: solid 1px white;
        border-left: solid 1px white;

        cursor: pointer;
        transition: all .3s ease;
        

        &.active{
        border-bottom: solid 2px ${Color.branco};
        background-color: rgba(190, 67, 13, 1)
        }

        &:hover{
            border-bottom: solid 2px ${Color.laranja};
        }
    }

}
`