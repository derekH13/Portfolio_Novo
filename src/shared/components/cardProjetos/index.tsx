import { ButtonPrimary, Texto, TitleSmall } from "../../../styles_Global/style";
import * as s from "./style";

type props = {
  flexRevers: boolean;
  img: string;
  title: string;
  descricao: string;
  frameworks: string[];
  link: string;
  github: string;
};

export default function CardProjetos({
  flexRevers,
  img,
  title,
  descricao,
  frameworks,
  link,
  github,
}: props) {
  return (
    <s.estilo flexRevers={flexRevers}>
      <div className="cardProjeto_imagem">
        <img src={img} alt="" />
        <div className="cardProjeto_tecnologias">
          {frameworks.map((item) => (
            <span className={item.toLowerCase()}>{item}</span>
          ))}
        </div>
      </div>
      <div className="cardProjeto_content">
        <div className="info">
          <TitleSmall>
            <span>{title}</span>
          </TitleSmall>
          <Texto>{descricao}</Texto>
        </div>
        <div className="cardProjeto_content_btn">
          <a href={link} target="_blank">
            <ButtonPrimary>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              GitHub
            </ButtonPrimary>
          </a>
          <a href={github} target="_blank">
            <ButtonPrimary>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-link-45deg"
                viewBox="0 0 16 16"
              >
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
              </svg>
              Acessar
            </ButtonPrimary>
          </a>
        </div>
      </div>
    </s.estilo>
  );
}
