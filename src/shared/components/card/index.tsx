import * as s from "./style";
import { ButtonSmall, Texto } from "../../../styles_Global/style";

type props = {
  title: string;
  texto: string;
  img: string;
};

export default function Card({ title, texto, img }: props) {
  return (
    <s.estiloCard>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <Texto>{texto}</Texto>
      <ButtonSmall>ver mais..</ButtonSmall>
    </s.estiloCard>
  );
}
