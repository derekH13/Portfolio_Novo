import * as s from "./styles";
import { ButtonPrimary } from "../../../styles_Global/style";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../redux/store";

import { motion } from "framer-motion";

export default function Header() {
  const visible = useSelector((state: RootReducer) => state.mostarNav.itens);

  return (
    <s.styleHeader>
      {visible && (
        <motion.img
          className="imagem_nav"
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="/assets/images/nav.png"
        />
      )}
      <nav className="interface2">
        <a href="#home" className="logo">
          <img src="/assets/images/logo (2).png" alt="" />
          <h5>
            DEREK <span>HENRIQUE</span>
          </h5>
        </a>
        <ul className="mobille">
          <li>
            <a className="link" href="#sobre">
              Sobre
            </a>
          </li>
          <li>
            <a className="link" href="#competencia">
              Competências
            </a>
          </li>
          <li>
            <a className="link" href="#projetos">
              Projetos
            </a>
          </li>
          <li className="btn">
            <a href="#contatos">
              <ButtonPrimary>Contatos</ButtonPrimary>
            </a>
          </li>
        </ul>
      </nav>
    </s.styleHeader>
  );
}
