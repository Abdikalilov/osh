import "./footer.scss"
import Logo from '../../shared/image/Group 1.png';
// import Social from '../../shared/image/socials.svg'
// import Face from '../../shared/image/socials (1).svg'
// import You from '../../shared/image/socials (2).svg'
// import Go from '../../shared/image/socials (3).svg'
import Akar from '../../shared/image/static.svg'
import Rectangle from '../../shared/image/Rectangle 986.svg'
// import Eye from '../../shared/image/eye.svg'
// import Door from '../../shared/image/door.svg'
// import People from '../../shared/image/people.svg'
import { NavLink } from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io";

export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="footer_top">
            <div className="footer_top_logo">
              <img src={Logo} alt="" />
              <a href="https://2gis.kg/osh/firm/70000001030596097">Адресc: ПКурманжан датка,272/1</a>
              <p>Телефон: +996 557 01 63 44</p>
              <div className="footer_top_logo_social">
                <div className="footer_top_logo_social_bloc">
                  <FaInstagram color="#105B60" />
                </div>
                <div className="footer_top_logo_social_bloc">
                  <CiFacebook color="#105B60" />
                </div>
                <div className="footer_top_logo_social_bloc">
                  <FaYoutube color="#105B60" />
                </div>
                <div className="footer_top_logo_social_bloc">
                  <FaGoogle color="#105B60" />
                </div>
              </div>
            </div>
            <div className="">
              <h3>О библиотеке</h3>
              <NavLink className="link" to={"/about"}>О библиотеке</NavLink>
              <NavLink className="link" to={"/support"}>Поддержать библиотеку</NavLink>
              <NavLink className="link" to={"/news"}>Новости</NavLink>
              <NavLink className="link" to={"/"}>Сми о нас</NavLink>
            </div>
            <div className="">
              <h3>Мероприятия и деятельность</h3>
              <NavLink className="link" to={"/afisha"}>Афиша мероприятий</NavLink>
              <NavLink className="link" to={"/professional"}>Профессиональная деятельность</NavLink>
              <NavLink className="link" to={"/electronic"}>Электронная библиотека</NavLink>

            </div>
            <div className="">
              <h3>Читателям</h3>
              <NavLink className="link" to={"/services"}>Услуги</NavLink>
              <NavLink className="link" to={"/catalog"}>Каталог</NavLink>
              <NavLink className="link" to={"/reader"}>Читателям</NavLink>
              <NavLink className="link" to={"/project"}>Проекты</NavLink>
            </div>
          </div>
          <div className="footer_bottom">
            <p>© 2025 Название библиотеки . Все права защищены.</p>
            <a href="https://geeks.kg/geeks-pro">MADE BY GEEKSPRO</a>
            <div className="footer_views">
              <img src={Akar} alt="" className="footer_views_akar" />
              <img src={Rectangle} alt="" />
              <div>
                <div className="img">
                  <div>
                  <FaRegEye />
                    <p>5930</p>
                  </div>
                  <div>
                  <IoExit />
                    <p>3369</p>
                  </div>
                  <div>
                  <IoMdPeople />
                    <p>2435</p>
                  </div>
                </div>
              </div>
            </div>
            <p>Политика конфидециональнности</p>
          </div>
        </div>
      </div>
    </div>
  )
}