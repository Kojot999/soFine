import style from "./Logo.module.scss";
import { Logo as LogoIcon } from "../../../assets/Logo";

export const Logo = ({ color }) => {
  return (
    <div className={style.Logo}>
      <LogoIcon color={color} />
    </div>
  );
};
