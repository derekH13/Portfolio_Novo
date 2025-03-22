import * as s from "./style";

export type propsSobre = {
  reverse: boolean;
  texto?: React.ReactNode;
  title?: React.ReactNode;
  bgColor: string;
  img?: string;
  eu?: boolean;
};

export default function Sobre({
  reverse,
  texto,
  title,
  bgColor,
  img,
  eu,
}: propsSobre) {
  return (
    <s.estiloSobre reverse={reverse} bgColor={bgColor} id="sobre">
      <div className="sobre">
        <div className="sobre_content">
          {title}
          {texto}
        </div>
      </div>
      <div className="container_images">
        <img src={img} alt="" />
        {eu && (
          <img src="/assets/images/eu (1).png" alt="" className="sobre_eu" />
        )}
      </div>
    </s.estiloSobre>
  );
}
