import style from "./MenuMobile.module.scss";
import { DROPDOWN, MENU } from "../../../constants/routes";
import { Images } from "../../../assets";

export const MenuMobile = () => {
  return (
    <div className={style.menuTriger}>
      <p>MENU</p>
      <div className={style.menu}>
        {MENU.map(({ path, name }) => (
          <a className={style.menuItem} href="/" key={name} to={path}>
            {name === "Produkty" ? (
              <div className={style.wrapper}>
                <div className={style.arrow}>
                  Produkty
                  <img alt="Arrow" src={Images.arrow} />
                </div>
                <div className={style.dropDown}>
                  {DROPDOWN.map(({ path, name }) => (
                    <div>
                      <a href="/" key={name} to={path}>
                        {name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              name
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MenuMobile;
