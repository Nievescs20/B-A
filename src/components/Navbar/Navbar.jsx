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
    <nav className="bg-white flex justify-center border-b-2">
      <div className="flex items-center font-medium justify-between w-[90vw]">
        <div className="z-50 p-5 md:w-auto">
          <Link to="/" onClick={() => setOpen(false)}>
            <img src={Logo} alt="logo" className="md:cursor-pointer h-12" />
          </Link>
        </div>
        <div>
          <div className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
            <NavLinks handleClose={setOpen} />
          </div>

          {/* Mobile nav */}
          <ul
            className={`z-30
        md:hidden bg-white fixed w-3/5 top-0 overflow-y-auto bottom-0 py-4 pl-4
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
            <NavLinks className="mt-4" handleClose={setOpen} />
          </ul>
          <ul
            className={`z-30
        md:hidden bg-white fixed w-3/5 top-0 overflow-y-auto bottom-0 py-6 pl-4
        duration-500 ${cartOpen ? "right-0" : "right-[-100%]"}
        `}
          >
            <div className="flex justify-between w-[90%] mb-2">
              <h1 className="font-bold text-3xl">Cart</h1>
              <VscChromeClose
                size={20}
                className="z-30 cursor-pointer"
                onClick={() => setCartOpen(!cartOpen)}
              />
            </div>
            <hr className="w-[90%]" />
            Cart Items Will Go Here
          </ul>
          <div className="flex items-center">
            <GiHamburgerMenu
              className="mr-4 md:hidden"
              size={25}
              onClick={() => setOpen(!open)}
            />
            <BsCart2
              className="md:hidden"
              size={28}
              onClick={() => setCartOpen(!cartOpen)}
            />
          </div>
        </div>
        <div className="md:block hidden">
          <BsCart2
            className="cursor-pointer"
            size={30}
            onClick={() => setOpen(!open)}
          />
        </div>
        <ul
          className={`
        z-30 hidden md:block bg-white fixed w-1/4 top-0 overflow-y-auto bottom-0 py-10 md:flex md:flex-col md: items-center
        duration-500 ${open ? "right-0" : "right-[-100%]"}
        `}
        >
          <div className="flex justify-between w-[90%] mb-4">
            <h1 className="font-bold text-3xl">Cart</h1>
            <VscChromeClose
              size={20}
              className="hidden md:block z-30 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <hr className="w-[90%]" />
          Cart Items Will Go Here
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
