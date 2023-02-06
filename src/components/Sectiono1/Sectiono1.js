import style from "./Sectiono1.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SLIDES } from "../../constants/routes";
import { useState } from "react";
import { Header } from "../Header/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Images } from "../../assets";

export const Sectiono1 = () => {
  const [color, setColor] = useState(1);

  return (
    <>
      <Header color={color} />
      <div className={style.sectiono1}>
        <Carousel
          onChange={(index) => setColor(!index)}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = {
              cursor: "pointer",
              path: Images.circleB,
              margin: "5px",
            };

            const style = isSelected
              ? { ...defStyle, path: Images.znakWhite }
              : { ...defStyle };
            return (
              <span
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              >
                <img
                  style={
                    style.path === Images.circleB
                      ? { width: "15px" }
                      : { width: "30px" }
                  }
                  src={style.path}
                  alt=""
                />
              </span>
            );
          }}
        >
          {SLIDES.map(({ id, img }) => (
            <div key={id} className={style.wrapper}>
              <img alt="" src={img} />
              <div className={style[id]}>
                <div>
                  <p>Bez kompromisu.</p>
                  <p>Idealnie takie jak lubisz.</p>
                  <p className={style.mark}>
                    KEUNE <strong>DESIGN</strong>
                  </p>
                </div>
                <div className={style.container}>
                  <img className={style.line} src={Images.line} alt="-" />
                  <img className={style.arrow} src={Images.circle} alt=">" />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
