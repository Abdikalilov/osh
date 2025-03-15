
import "./header.scss";
import "./BurgerMenu.jsx"
import { NavLink } from "react-router-dom";
import Group from "../../shared/image/Group.svg";
import Icon from "../../shared/image/Icon.svg";
import Rus from "../../shared/image/image 2 (1).svg";
import Kg from "../../shared/image/image 3.svg";
import { FaEyeSlash, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import BurgerMenu from "./BurgerMenu.jsx";




const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false); 
  };

  return (
    <div className="language-switcher">
      <div className="selected-lang" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={i18n.language === "ru" ? Rus : Kg}
          alt={i18n.language === "ru" ? "Russia" : "Kyrgyzstan"}
          style={{ width: 30, height: 20 }}
        />
        <MdOutlineKeyboardArrowDown size={20} style={{
          color: "white",
        }}/>
      </div>
      {isOpen && (
        <div className="dropdown">
          <div onClick={() => changeLanguage("ru")} style={{color: "white"}}>
            <img src={Rus} alt="Russia" style={{ width: 30, height: 20 }} />ru
          </div>
          <div onClick={() => changeLanguage("kg")} style={{color: "white"}}>
            <img  src={Kg} alt="Kyrgyzstan" style={{ width: 30, height: 20 }} />kg
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;


export const Header = () => {
  return (
    <div className="header container">
      <div className="header_top">
        <img src={Group} alt="Logo" className="header_top_logo" />
        <div className="header_top_inp">
          <input type="text" placeholder="Поиск" />
          <button>
            <img src={Icon} alt="Search" />
          </button>
        </div>
        <button className="header_top_eye">
          <FaEyeSlash color="#105B60" className="eye" />
        </button>
        <nav>
          <NavLink className="link">О библиотеке</NavLink>
          <NavLink className="link">Поддержать библиотеку</NavLink>
          <NavLink className="link">Новости</NavLink>
          <NavLink className="link">Услуги</NavLink>
          <NavLink className="link">Каталог</NavLink>
        </nav>
      </div>

      <div className="header_bottom">
        <nav>
          <NavLink className="link">Афиша мероприятий</NavLink>
          <NavLink className="link">Профессиональная деятельность</NavLink>
          <NavLink className="link">Читателям</NavLink>
          <NavLink className="link">Проекты</NavLink>
        </nav>

        <div className="header_bottom_social">
          <div className="header_bottom_social_map">
            <div className="header_bottom_social_map_text">
              <LanguageSwitcher />
              <div className="header_bottom_social_map_img">
                <div className="locate">
                  <MdOutlineLocationOn />
                </div>
                <div className="locate">
                  <MdOutlinePhone />
                </div>
                <div className="locate">
                  <FaInstagram />
                </div>
                <div className="locate">
                  <FaFacebook />
                </div>

                <BurgerMenu />

              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
