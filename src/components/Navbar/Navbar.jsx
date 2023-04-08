import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/signature.jpeg";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { removeItem } from "../../store/cart";

function Navbar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cart = useSelector((state) => state.cartReducer.products);
  let cartTotal = 0;
  for (const item of cart) {
    cartTotal += item.price;
  }

  function removeItemFromCart(itemId) {
    dispatch(removeItem(itemId));
  }

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
            className={`z-30 h-[100vh] flex flex-col
        md:hidden bg-white fixed w-[65%] top-0 bottom-0 py-6 pl-4
        duration-500 ${cartOpen ? "right-0" : "right-[-100%]"}
        `}
          >
            <div className="flex justify-between w-[95%] mb-2">
              <h1 className="font-bold text-3xl">Cart</h1>
              <VscChromeClose
                size={20}
                className="z-30 cursor-pointer"
                onClick={() => setCartOpen(!cartOpen)}
              />
            </div>
            <hr className="w-[95%]" />
            <div className="w-[95%] flex flex-col justify-between flex-1">
              <div className="my-3 overflow-y-auto">
                {cart.length === 0 && <h3>Your cart is currently empty.</h3>}
                {cart.map((item) => (
                  <div className=" my-3" key={uuidv4()}>
                    <div className="flex items-start">
                      <button
                        className="px-2"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        x
                      </button>
                      <img
                        src={item.image}
                        alt="item image"
                        className="h-[75px] w-[75px]"
                      />
                      <div className="px-2">
                        <h4 className="text-sm">{item.name}</h4>
                      </div>
                    </div>
                    <div className="flex justify-end px-2 my-2">
                      <div className="flex items-center mr-2">
                        <button className="">
                          <AiOutlineMinusCircle size={20} />
                        </button>
                        <h4 className="mx-4">{item.qty}</h4>
                        <button className="">
                          <AiOutlinePlusCircle size={20} />
                        </button>
                      </div>
                      <h4>${item.price.toFixed(2)}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <hr />
                <div className="flex justify-between mt-2">
                  <h2 className="font-bold">SUBTOTAL</h2>
                  <h2 className="">${cartTotal.toFixed(2)}</h2>
                </div>
                <h3 className="text-sm font-thin my-3">
                  Shipping, taxes, and discount codes calculated at checkout.
                </h3>
                <button className="bg-black text-white w-full py-2">
                  Check Out
                </button>
              </div>
            </div>
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
