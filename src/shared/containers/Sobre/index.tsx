import * as s from "./style";

export type propsSobre = {
  reverse: boolean;
  texto?: React.ReactNode;
  title?: React.ReactNode;
  bgColor: string;
};

export default function Sobre({ reverse, texto, title, bgColor }: propsSobre) {
  return (
    <s.estiloSobre reverse={reverse} bgColor={bgColor}>
      <div className="sobre">
        <div className="sobre_content">
          {title}
          {texto}
        </div>
      </div>
      <div className="container_images">
        <img src="/assets/images/image 11.png" alt="" />
        <img src="/assets/images/eu (1).png" alt="" className="sobre_eu" />
      </div>
    </s.estiloSobre>
  );
}
