import { TitleSmall } from "../../../styles_Global/style";
import CardProjetos from "../../components/cardProjetos";
import * as s from "./style";

import { projetosArray } from "../../../data";

export default function Projetos() {
  return (
    <s.estilo id="projetos">
      <div className="interface">
        <TitleSmall>
          Meus <span>Projetos</span>
        </TitleSmall>
        <div className="projetos_container">
          {projetosArray.map((item, index) => (
            <CardProjetos
              flexRevers={item.flex}
              descricao={item.descricao}
              frameworks={item.frameworks}
              github={item.github}
              img={item.img}
              link={item.link}
              title={item.title}
              key={index}
            />
          ))}
        </div>
      </div>
    </s.estilo>
  );
}
