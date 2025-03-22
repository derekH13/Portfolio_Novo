import styled from "styled-components";
import { Color } from "../../../styles_Global/variaveis";
import { ButtonPrimary, Texto } from "../../../styles_Global/style";

export const estiloCard = styled.div`
min-height: 300px;
position: relative;
padding: 20px;
border-radius: 30px;


border-bottom: 1px solid rgba(255, 255, 255, 0.2);
border-top: 1px solid rgba(255, 255, 255, 0.2);
border-right: 1px solid rgba(255, 255, 255, 0.1);
border-left: 1px solid rgba(255, 255, 255, 0.1);

img{
height: 100px;
}

h3{
    color: ${Color.branco};
    font-size: 28px;
    padding-top: 8px;
}

${Texto}{
    padding: 4px 0px 20px 0px;
}

${ButtonPrimary}{
width: 100%;
height: 40px;
border-radius: 10px;

}

`