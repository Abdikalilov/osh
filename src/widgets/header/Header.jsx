import './header.scss';
import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Group from '../../shared/image/Group.svg';
import RUS from '../../shared/image/image 2 (1).svg';
import Icon from '../../shared/image/Icon.svg';
import Kg from '../../shared/image/image 3.svg';
import { FaEyeSlash, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { VisuallyImpaired } from '../../entities/VisuallyImpaired/VisuallyImpaired';
import { activeMode, deactivateMode } from '../../app/store/reducers/visually';

export const Header = () => {
  const [selected, setSelected] = useState(Kg);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.visually);

  const options = [
    { value: "1", label: Kg },
    { value: "2", label: RUS },
  ];

  const handleToggle = () => setIsOpen(prev => !prev);
  const handleSelect = (option) => {
    setSelected(option.label);
    setIsOpen(false);
  };
  const handleBlur = (event) => {
    if (!selectRef.current?.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const mainTextSpeech = (text) => {
    window.speechSynthesis.cancel(); 
    const talk = new SpeechSynthesisUtterance(text);
    talk.lang = 'ru-RU';
    window.speechSynthesis.speak(talk);
  };

  const handleVisuallyImpairedToggle = () => {
    if (active) {
      dispatch(deactivateMode());
      setTimeout(() => mainTextSpeech('Режим для слабовидящих выключен'), 100); 
    } else {
      dispatch(activeMode());
      setTimeout(() => mainTextSpeech('Режим для слабовидящих включен'), 100);
    }
  };

  return (
    <div className='header container'>
            {active && <VisuallyImpaired mainTextSpeech={mainTextSpeech} />}

      <div className='header_top'>
        <img src={Group} alt="logo" className='header_top_logo' />
        <div className='header_top_inp'>
          <input type="text" placeholder='Поиск' />
          <button><img src={Icon} alt="search" /></button>
        </div>
        <button className='header_top_eye' onClick={handleVisuallyImpairedToggle}>
          <FaEyeSlash color='#105B60' className='eye' />
        </button>
        <nav>
          <NavLink className='link' to="/about">О библиотеке</NavLink>
          <NavLink className='link' to="/support">Поддержать библиотеку</NavLink>
          <NavLink className='link' to="/news">Новости</NavLink>
          <NavLink className='link' to="/services">Услуги</NavLink>
          <NavLink className='link' to="/catalog">Каталог</NavLink>
        </nav>
      </div>

      <div className="header_bottom">
        <nav>
          <NavLink className='link' to="/afisha">Афиша мероприятий</NavLink>
          <NavLink className='link' to="/professional">Профессиональная деятельность</NavLink>
          <NavLink className='link' to="/reader">Читателям</NavLink>
          <NavLink className='link' to="/project">Проекты</NavLink>
        </nav>
        <div className="header_bottom_social">
          <div className='header_bottom_social_map'>
            <div className='header_bottom_social_map_text'>
              <div className='laug' ref={selectRef} onBlur={handleBlur}>
                <div onClick={handleToggle} className="select-trigger">
                  <img className='laug_img' src={selected} alt="language" />
                  <IoIosArrowDown />
                </div>
                {isOpen && (
                  <div className="abs">
                    {options.map((option) => (
                      <div
                        key={option.value}
                        style={{ marginTop: '10px' }}
                        onClick={() => handleSelect(option)}
                      >
                        <img className='aman' src={option.label} alt="option" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className='header_bottom_social_map_img'>
                <div className='locate'><MdOutlineLocationOn /></div>
                <div className='locate'><MdOutlinePhone /></div>
                <div className='locate'><FaInstagram /></div>
                <div className='locate'><FaFacebook /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};