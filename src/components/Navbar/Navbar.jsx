import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/signature.jpeg";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <nav className="bg-white flex justify-center">
      <div className="flex items-center font-medium justify-between w-[90vw]">
        <div className="z-50 p-5 md:w-auto">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-12" />
        </div>
        <div>
          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
            <li>
              <Link to="/" className="py-7 px-3 inline-block text-lg">
                Home
              </Link>
            </li>

            <NavLinks />
          </ul>
          <div className="md:block hidden">
            <BsCart2 size={30} />
          </div>
          {/* Mobile nav */}
          <ul
            className={`
        md:hidden bg-white fixed w-3/5 top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "right-0" : "right-[-100%]"}
        `}
          >
            <NavLinks className="mt-4" />
          </ul>
          <ul
            className={`
        md:hidden bg-white fixed w-3/5 top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${cartOpen ? "right-0" : "right-[-100%]"}
        `}
          >
            Cart Items Will Go Here
          </ul>
          <div className="flex items-center">
            {open ? (
              <VscChromeClose
                size={20}
                className="mr-4 md:hidden z-10"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <GiHamburgerMenu
                className="mr-4 md:hidden"
                size={25}
                onClick={() => setOpen(!open)}
              />
            )}
            {cartOpen ? (
              <VscChromeClose
                size={20}
                className="mr-4 md:hidden z-20"
                onClick={() => setCartOpen(!cartOpen)}
              />
            ) : (
              <BsCart2 size={28} onClick={() => setCartOpen(!cartOpen)} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
