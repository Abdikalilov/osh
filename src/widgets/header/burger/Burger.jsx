import { useState } from 'react';
import HeaderNav from "../headerNav/HeaderNav"
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import "./burger.scss"

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="burger-menu">
        <input
          id="menu__toggle"
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />

        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <div className={`menu__box ${isOpen ? 'open' : ''}`}>
          <HeaderNav />
          <div className="icons">
            <div className="locates">
              <MdOutlineLocationOn size={20} />
            </div>
            <div className="locates">
              <MdOutlinePhone size={20} />
            </div>
            <div className="locates">
              <FaInstagram size={20} />
            </div>
            <div className="locates">
              <FaFacebook size={20} />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Burger