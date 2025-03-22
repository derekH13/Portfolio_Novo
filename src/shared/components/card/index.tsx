import * as s from "./style";
import { ButtonPrimary, Texto } from "../../../styles_Global/style";
import { useDispatch } from "react-redux";
import { mostarCompetencia } from "../../../redux/reducer/competencia";

type props = {
  title: string;
  texto: string;
  img: string;
  area: "frontend" | "backend" | "banco" | "outros";
};

export default function Card({ title, texto, img, area }: props) {
  const dispatch = useDispatch();

  return (
    <s.estiloCard>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <Texto>{texto}</Texto>
      <a href="#competencia">
        {" "}
        <ButtonPrimary onClick={() => dispatch(mostarCompetencia(area))}>
          ver mais..
        </ButtonPrimary>
      </a>
    </s.estiloCard>
  );
}
