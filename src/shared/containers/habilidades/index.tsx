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
          texto="Tenho experiência com diversas tecnologias de front-end, incluindo HTML, CSS, JavaScript, além de frameworks como React, Vue..."
        />
        <Card
          area="banco"
          img="/assets/images/card (3).png"
          title="BANCO DE DADOS"
          texto="Tenho experiência no gerenciamento e manipulação de bancos de dados, incluindo o uso de SQL, MySQL, PostgreSQL..."
        />
        <Card
          area="backend"
          img="/assets/images/card (2).png"
          title="BACK END"
          texto="Tenho experiência no desenvolvimento de soluções de backend, Python, Django, e integração com bancos de dados..."
        />
      </s.estiloHabilidades>
    </div>
  );
}
