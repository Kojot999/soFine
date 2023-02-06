import style from "./Socials.module.scss";
import { Images } from "../../../assets/index";

export const Socials = ({ color }) => {
  return (
    <div className={style.Wrapper}>
      <img src={color ? Images.fbWhite : Images.fb} alt="" />
      <div className={style.Container}>
        <img src={color ? Images.twWhite : Images.tw} alt="" />
        <img src={color ? Images.ytWhite : Images.yt} alt="" />
      </div>
      <img src={color ? Images.igWhite : Images.ig} alt="" />
    </div>
  );
};
