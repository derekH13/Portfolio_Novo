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
      <nav className="interface">
        <div className="logo">
          <img src="/assets/images/logo (2).png" alt="" />
          <h5>
            DEREK <span>HENRIQUE</span>
          </h5>
        </div>
        <ul className="mobille">
          <li>
            <a className="link" href="">
              Competências
            </a>
          </li>
          <li>
            <a className="link" href="">
              Sobre
            </a>
          </li>
          <li className="btn">
            <a href="">
              <ButtonPrimary>Contatos</ButtonPrimary>
            </a>
          </li>
        </ul>
      </nav>
    </s.styleHeader>
  );
}
