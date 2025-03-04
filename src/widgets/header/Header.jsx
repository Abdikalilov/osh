import './header.scss';
import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Group from '../../shared/image/Group.svg';
import RUS from '../../shared/image/image 2 (1).svg';
import Icon from '../../shared/image/Icon.svg';
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaEyeSlash } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Kg from '../../shared/image/image 3.svg';
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
  const [selected, setSelected] = useState(Kg);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const options = [
    { value: "1", label: Kg },
    { value: "2", label: RUS },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className='header container'>
      <div className='header_top'>
        <img src={Group} alt="" className='header_top_logo' />
        <div className='header_top_inp'>
          <input type="text" placeholder='Поиск' />
          <button><img src={Icon} alt="" /></button>
        </div >
        <button className='header_top_eye'><FaEyeSlash color='#105B60' className='eye' /></button>
        <nav>
          <NavLink className='link' to={"/about"}>О библиотеке</NavLink>
          <NavLink className='link' to={"/support"}>Поддержать библиотеку</NavLink>
          <NavLink className='link'  to={"/news"}>Новости</NavLink>
          <NavLink className='link' to={"/services"}>Услуги</NavLink>
          <NavLink className='link' to={"/catalog"}>Каталог</NavLink>
        </nav>
      </div>
      <div className="header_bottom">
        <nav>
          <NavLink className='link' to={"/afisha"}>Афиша мероприятий</NavLink>
          <NavLink className='link' to={"/professional"}>Профессиональная деятельность</NavLink>
          <NavLink className='link' to={"/reader"}>Читателям</NavLink>
          <NavLink className='link' to={"/project"}>Проекты</NavLink>
        </nav>
        <div className="header_bottom_social">
          <div className='header_bottom_social_map'>
            <div className='header_bottom_social_map_text'>
              <div className='laug'>
                <div ref={selectRef} className="">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <img  className='laug_img' src={selected} alt="" />
                    <IoIosArrowDown />

                  </div>
                  {isOpen && (
                    <div className="abs ">
                      {options.map((option) => (
                        <div

                        style={{marginTop:'10px'}}
                          key={option.value}
                          onClick={() => {
                            setSelected(option.label);
                            setIsOpen(false);
                          }}
                        >
                          <img  className='aman' src={option.label} alt="" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className='header_bottom_social_map_img'>
                <div className='locate'>
                  <MdOutlineLocationOn />
                </div>
                <div className='locate'>
                  <MdOutlinePhone />
                </div>
                <div className='locate'>
                  <FaInstagram />
                </div>
                <div className='locate'>
                  <FaFacebook />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


