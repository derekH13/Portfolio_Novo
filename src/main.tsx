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
          reverse={false}
          bgColor={Color.branco}
          title={
            <Title color={Color.preto} spanColor={Color.laranja}>
              DEREK <span>HENRIQUE</span>
            </Title>
          }
          texto={
            <Texto color={Color.preto}>
              Olá, meu nome é Derek Henrique, tenho 20 anos e moro em São Paulo.
              Sou uma pessoa calma e racional, sempre buscando maneiras
              eficientes de realizar tarefas. A minha curiosidade é uma das
              minhas principais qualidades, o que me impulsiona a entender e
              otimizar processos para atender às expectativas.
              <br />
              <br />
              Minha trajetória profissional começou como aprendiz em uma escola
              particular de São Paulo, onde atuei em diversas áreas, adquirindo
              uma visão ampla e desenvolvendo habilidades em diferentes setores.
              Depois, trabalhei como auxiliar de almoxarifado em uma empresa de
              produtos hospitalares, onde aprimorei competências em organização,
              gestão de processos e liderança.
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
        <Competencias />
        <Projetos />
        <Footer />
      </section>
    </Provider>
  </StrictMode>
);
