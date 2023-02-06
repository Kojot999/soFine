import style from "./Header.module.scss";
import { Logo } from "./Logo/Logo";
import { DeskoptMenu } from "./Menu/Menu";
import { Socials } from "./Socials/Socials";

export const Header = ({ color }) => {
  return (
    <div className={style.Header}>
      <div className={style.WrapperLogo}>
        <Logo color={color} />
      </div>
      <div className={style.WrapperMenu}>
        <DeskoptMenu color={color} />
        <Socials color={color} />
      </div>
    </div>
  );
};
