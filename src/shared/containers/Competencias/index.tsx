import { TitleSmall } from "../../../styles_Global/style";
import Card from "../../components/card";
import * as s from "./style";

export default function Competencias() {
  return (
    <s.estiloCompetencias>
      <div className="interface">
        <TitleSmall>
          Minhas <span>Competências</span>
        </TitleSmall>

        <div className="tab_competancias">
          <button>Front End</button>
          <button>UI/UX</button>
          <button>Back End</button>
        </div>

        <div className="competencias_tecnologias">
          <div className="competencias_tecnologias_card">
            <img src="/assets/images/frontend/frontend (1).png" alt="" />
          </div>
          <div className="competencias_tecnologias_card">
            <img src="/assets/images/frontend/frontend (1).png" alt="" />
          </div>
          <div className="competencias_tecnologias_card">
            <img src="/assets/images/frontend/frontend (1).png" alt="" />
          </div>
          <div className="competencias_tecnologias_card">
            <img src="/assets/images/frontend/frontend (1).png" alt="" />
          </div>
          <div className="competencias_tecnologias_card">
            <img src="/assets/images/frontend/frontend (1).png" alt="" />
          </div>
          <div className="competencias_tecnologias_card">
            <img src="/assets/images/frontend/frontend (1).png" alt="" />
          </div>
        </div>
      </div>
    </s.estiloCompetencias>
  );
}
