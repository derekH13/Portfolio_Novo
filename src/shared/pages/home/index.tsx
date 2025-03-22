import * as s from "./style";
import { Texto, Title } from "../../../styles_Global/style";
import Button from "../../components/button";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { mostarNav } from "../../../redux/reducer/mostarNav";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.95,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mostarNav(!inView));
  }, [inView]);

  console.log(inView);

  return (
    <s.StyleHome id="home">
      <div className="interface home">
        <img
          src="/assets/images/Vector 2.png"
          ref={ref}
          className="blur_fundo"
        />
        <div className="home_container">
          <div className="home_content">
            <Title tag={true}>
              Desenvolvedor <br /> Full Stack
            </Title>
            <Texto>
              Ao longo dos anos, participei de diversos projetos robustos, tanto
              na parte de back-end quanto front-end, o que me permitiu adquirir
              uma visão abrangente e aprimorar minhas habilidades técnicas.
              Sempre fui motivado pela resolução de problemas.
            </Texto>
            <a href="assets/Curriculo.pdf" download="Currículo_Derek">
              <Button text="Currículo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="white"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </Button>
            </a>
          </div>
          <img className="imagem_eu" src="/assets/images/eu (2).png" alt="" />
        </div>
      </div>
    </s.StyleHome>
  );
}
