import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { removeItem, updateQty } from "../../store/cart";

function Navbar({ cartOpen, setCartOpen }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cartReducer.products);
  let cartTotal = 0;
  for (const item of cart) {
    cartTotal += item.price * item.qty;
  }

  function removeItemFromCart(itemId) {
    dispatch(removeItem(itemId));
  }

  function decrementItem(item) {
    dispatch(updateQty(item, -1));
    if (item.qty === 0) {
      removeItemFromCart(item.id);
    }
  }

  function handleCheckout() {
    fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  }

  return (
    <nav className="bg-white flex justify-center border-b-2 h-[10vh]">
      <div className="flex items-center font-medium justify-between w-[90vw]">
        <div className="z-50 p-5 md:w-auto">
          <Link to="/" onClick={() => setOpen(false)}>
            <img src={Logo} alt="logo" className="md:cursor-pointer h-20" />
          </Link>
        </div>
        <div>
          <div className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
            <NavLinks handleClose={setOpen} />
          </div>
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
        md:w-2/5 bg-white fixed w-[65%] top-0 bottom-0 pb-6 pl-4
        duration-500 ${cartOpen ? "right-0" : "right-[-100%]"}
        `}
          >
            <div className="flex justify-between items-center w-[95%] mb-2 border-b-2 h-[10vh]">
              <h1 className="font-bold text-3xl">Cart</h1>
              <VscChromeClose
                size={20}
                className="z-30 cursor-pointer"
                onClick={() => setCartOpen(!cartOpen)}
              />
            </div>
            {/* <hr className="w-[95%]" /> */}
            <div className="w-[95%] flex flex-col justify-between flex-1">
              <div className="my-3 overflow-y-auto">
                {cart.length === 0 && (
                  <h3 className="text-center font-bold md:text-xl">
                    Your cart is currently empty.
                  </h3>
                )}
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
                        <button onClick={() => decrementItem(item)}>
                          <AiOutlineMinusCircle size={20} />
                        </button>
                        <h4 className="mx-4">{item.qty}</h4>
                        <button onClick={() => dispatch(updateQty(item, 1))}>
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
                <button
                  className="bg-black text-white w-full py-2"
                  onClick={handleCheckout}
                >
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
              color={cart.length === 0 ? "black" : "red"}
              onClick={() => setCartOpen(!cartOpen)}
            />
          </div>
        </div>
        <div className="md:block hidden">
          <BsCart2
            className="cursor-pointer mx-10"
            size={30}
            color={cart.length === 0 ? "black" : "red"}
            onClick={() => {
              console.log("open cart");
              setCartOpen(true);
            }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
