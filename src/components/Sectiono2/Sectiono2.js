import style from "./Sectiono2.module.scss";
import { TILES } from "../../constants/routes";
import { Images } from "../../assets";

export const Sectiono2 = () => {
  return (
    <div className={style.container}>
      {TILES.map(({ title, img, name }) => (
        <div key={title} className={`${style[name]} ${style.zoom}`}>
          {img === "" ? null : <img className={style.image} alt="" src={img} />}
          <div className={style.wrapper}>
            <div className={style.title}>
              <p>KEUNE</p>
              <p>{title}</p>
            </div>
            <div>
              {img === "" ? null : (
                <div>
                  <a className={style.button} href="/">
                    <img className={style.line} src={Images.line} alt="-" />
                    ODKRYJ SERIE
                    <img
                      className={style.arrow}
                      src={Images.arrowHori}
                      alt=">"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
