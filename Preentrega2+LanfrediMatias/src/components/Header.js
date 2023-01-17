import React, { useContext, useState, useEffect } from "react";
//?Import Sidebar Context
import { SidebarContext } from "../contexts/SidebarContext";
//?Import Cart Context
import { CartContext } from "../contexts/CartContext";
//?Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
//?Import Links
import { Link } from "react-router-dom";
//?Import Logo
import Logo from "../img/logo.svg";

const Header = () => {
  //?Header State
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  //?Event Listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full ">
        {/*Logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
        <Link></Link>
        {/*Cart */}
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon className="text-2xl " icon={faBagShopping} />
          <div className="bg-red-500 p-1 -right-2 bottom-2 text-[12px] h-[18px] absolute text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
