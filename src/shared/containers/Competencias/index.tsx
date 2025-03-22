import { useEffect, useState } from "react";
import { TitleSmall } from "../../../styles_Global/style";
import * as s from "./style";
import { frontendObj, backendObj, bancoObj, outrosObj } from "../../../data";
import { mostarCompetencia } from "../../../redux/reducer/competencia";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../redux/store";

export default function Competencias() {
  const [area, setArea] = useState("frontend");

  const btnCompetencia = useSelector(
    (state: RootReducer) => state.mostarCompetencia.itens
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setArea(btnCompetencia);
  }, [btnCompetencia]);

  return (
    <s.estiloCompetencias id="competencia">
      <div className="interface">
        <TitleSmall>
          Minhas <span>Competências</span>
        </TitleSmall>

        <div className="tab_competancias">
          <button
            className={btnCompetencia === "frontend" ? `active` : ""}
            onClick={() => dispatch(mostarCompetencia("frontend"))}
          >
            Front End
          </button>
          <button
            className={btnCompetencia === "backend" ? `active` : ""}
            onClick={() => dispatch(mostarCompetencia("backend"))}
          >
            Back End
          </button>
          <button
            className={btnCompetencia === "banco" ? `active` : ""}
            onClick={() => dispatch(mostarCompetencia("banco"))}
          >
            Banco de Dados
          </button>
          <button
            className={btnCompetencia === "outros" ? `active` : ""}
            onClick={() => dispatch(mostarCompetencia("outros"))}
          >
            Outras Tecnologias
          </button>
        </div>

        {area == "frontend" && (
          <div className="competencias_tecnologias">
            {frontendObj.map((item) => (
              <div className="competencias_tecnologias_card">
                <img src={item.img} alt="" />
                <h5>{item.title}</h5>
              </div>
            ))}
          </div>
        )}
        {area == "outros" && (
          <div className="competencias_tecnologias">
            {outrosObj.map((item) => (
              <div className="competencias_tecnologias_card">
                <img src={item.img} alt="" />
                <h5>{item.title}</h5>
              </div>
            ))}
          </div>
        )}
        {area == "backend" && (
          <div className="competencias_tecnologias">
            {backendObj.map((item) => (
              <div className="competencias_tecnologias_card">
                <img src={item.img} alt="" />
                <h5>{item.title}</h5>
              </div>
            ))}
          </div>
        )}
        {area == "banco" && (
          <div className="competencias_tecnologias">
            {bancoObj.map((item) => (
              <div className="competencias_tecnologias_card">
                <img src={item.img} alt="" />
                <h5>{item.title}</h5>
              </div>
            ))}
          </div>
        )}
      </div>
    </s.estiloCompetencias>
  );
}
