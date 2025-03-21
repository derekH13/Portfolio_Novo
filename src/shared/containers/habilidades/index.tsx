import Card from "../../components/card";
import * as s from "./style";

export default function Habilidades() {
  return (
    <div className="interface">
      <s.estiloHabilidades>
        <Card
          area="frontend"
          img="/assets/images/card (1).png"
          title="FRONT END"
          texto="Figma para Iniciantes: Criando Landing Page do Zero Figma "
        />
        <Card
          area="banco"
          img="/assets/images/card (3).png"
          title="BANCO DE DADOS"
          texto="Figma para Iniciantes: Criando Landing Page do Zero Figma "
        />
        <Card
          area="backend"
          img="/assets/images/card (2).png"
          title="BACK END"
          texto="Figma para Iniciantes: Criando Landing Page do Zero Figma "
        />
      </s.estiloHabilidades>
    </div>
  );
}
