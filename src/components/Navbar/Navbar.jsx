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
          <div className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
            <NavLinks />
          </div>

          {/* Mobile nav */}
          <ul
            className={`
        md:hidden bg-white fixed w-3/5 top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "right-0" : "right-[-100%]"}
        `}
          >
            <div className="flex justify-end">
              {open && (
                <VscChromeClose
                  size={20}
                  className="mr-4 md:block z-30 cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
              )}
            </div>
            <NavLinks className="mt-4" />
          </ul>
          <ul
            className={`
        md:hidden bg-white fixed w-3/5 top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${cartOpen ? "right-0" : "right-[-100%]"}
        `}
          >
            <div className="flex justify-end">
              {cartOpen && (
                <VscChromeClose
                  size={20}
                  className="mr-4 md:block z-30 cursor-pointer"
                  onClick={() => setCartOpen(!cartOpen)}
                />
              )}
            </div>
            Cart Items Will Go Here
          </ul>
          <div className="flex items-center">
            {!open && (
              <GiHamburgerMenu
                className="mr-4 md:hidden"
                size={25}
                onClick={() => setOpen(!open)}
              />
            )}
            {!cartOpen && (
              <BsCart2
                className="md:hidden"
                size={28}
                onClick={() => setCartOpen(!cartOpen)}
              />
            )}
          </div>
        </div>
        <div className="md:block hidden">
          {!open && (
            <BsCart2
              className="cursor-pointer"
              size={30}
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
        <ul
          className={`
        hidden md:block bg-white fixed w-1/4 top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "right-0" : "right-[-100%]"}
        `}
        >
          <div className="flex justify-end">
            <VscChromeClose
              size={20}
              className="mr-4 hidden md:block z-30 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          Cart Items Will Go Here
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
