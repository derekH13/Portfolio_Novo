import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./shared/pages/home";
import { GlobalStyle, Texto, Title } from "./styles_Global/style";
import Header from "./shared/containers/header";
import Habilidades from "./shared/containers/habilidades";
import Sobre from "./shared/containers/Sobre";
import { Color } from "./styles_Global/variaveis";
import Competencias from "./shared/containers/Competencias";
import { Provider } from "react-redux";
import store from "./redux/store";
import Projetos from "./shared/containers/projetos";
import Footer from "./shared/containers/footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <section className="ladding-page">
        <Header />
        <Home />
        <Habilidades />
        <Sobre
          eu={true}
          img="/assets/images/image 11.png"
          bgColor={Color.laranja}
          reverse={true}
          title={
            <Title spanColor={Color.preto}>
              DEREK <span>HENRIQUE</span>
            </Title>
          }
          texto={
            <Texto color={Color.branco}>
              Olá, meu nome é Derek Henrique, tenho 20 anos e moro em São Paulo.
              Sou uma pessoa calma e racional, sempre buscando maneiras
              eficientes de realizar tarefas. A minha curiosidade é uma das
              minhas principais qualidades, o que me impulsiona a entender e
              otimizar processos para atender às expectativas.
              <br />
              <br />
              Atualmente, estou me especializando na área de TI, com a conclusão
              do curso Fullstack da EBAC, onde adquiri conhecimentos em Python,
              JavaScript e Front-end. Como freelancer Full Stack, desenvolvi
              projetos completos, incluindo APIs, interfaces responsivas,
              e-commerce e redes sociais, além de colaborar em projetos
              voluntários de desenvolvimento de sites, sempre buscando soluções
              acessíveis e eficientes.
            </Texto>
          }
        />
        <Sobre
          img="/assets/images/image 11.png"
          reverse={false}
          bgColor={Color.branco}
          title={
            <Title color={Color.preto} spanColor={Color.laranja}>
              CURSOS E <span>FORMAÇÕES</span>
            </Title>
          }
          texto={
            <div className="container_cursos">
              <span></span>
              <div>
                <ul>
                  <li>
                    <h3>Análise e Desenvolvimento de Sistemas</h3>
                    <p>
                      Curso Superior - Uninove - Setembro/2023 a Dezembro/2025
                    </p>
                  </li>
                  <li>
                    <h3>Desenvolvedor Full Stack Python</h3>
                    <p>
                      Livre Profissionalizante - EBAC - Agosto/2024 a
                      Dezembro/2024
                    </p>
                  </li>
                  <li>
                    <h3>Curso Front-end Completo 2.0</h3>
                    <p>Curso Prático e Intensivo - Danki Code - 2024</p>
                  </li>
                  <li>
                    <h3>Curso de HTML</h3>
                    <p>Curso Prático e Intensivo - Danki Code - 2024</p>
                  </li>
                  <li>
                    <h3>Inteligência Artificial</h3>
                    <p>Curso Prático e Intensivo - Ebac - 2024</p>
                  </li>
                  <li>
                    <h3>Introdução a Programação</h3>
                    <p>Curso Prático e Intensivo - Ebac - 2024</p>
                  </li>
                  <li>
                    <h3>Curso de JavaScript Completo</h3>
                    <p>Curso Prático e Intensivo - Danki Code - 2024</p>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
        <Competencias />
        <Projetos />
        <Footer />
      </section>
    </Provider>
  </StrictMode>
);
