import { EstiloBotao } from "./style";

type Props = {
  children: React.ReactNode;
  text: string;
};

const Button = ({ children, text }: Props) => {
  return (
    <EstiloBotao>
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">{children && children}</div>
      </div>
      <span>{text}</span>
    </EstiloBotao>
  );
};

export default Button;
