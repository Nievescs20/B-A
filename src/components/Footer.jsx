import React from "react";
import { footerData } from "../footerLinks";
import FooterField from "./FooterField";
import { AiOutlineMail } from "react-icons/ai";
import { FaCcAmex, FaCcMastercard, FaCcVisa, FaPaypal } from "react-icons/fa";
import { SiApplepay, SiGooglepay } from "react-icons/si";

const Footer = () => {
  function handleSubmit(e) {
    e.preventDefault();
    //Do Something Here TODO:
  }

  return (
    <div className="bg-black py-6">
      {footerData.map((tier) => (
        <FooterField data={tier} />
      ))}
      <div className="flex justify-center items-center">
        <hr className="w-[90%] my-4" />
      </div>
      <div className="text-white px-6">
        <h1 className="text-2xl mb-2">Subscribe!</h1>
        <p className="text-xl ">
          Sign up to get offers, free mobile wallpapers and the first to know
          about new products!
        </p>
        <div className="flex border-solid border-white border-2 items-center my-6 mx-4 w-3/5">
          <AiOutlineMail className="mx-2" size={35} />
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="email"
              className="bg-black text-white border-none flex-1"
              placeholder="Enter your email"
            />
          </form>
        </div>
        <div className="flex flex-wrap justify-center mx-8 py-4 items-center">
          <FaCcAmex size={45} className="mx-1" />
          <SiApplepay size={45} className="mx-1" />
          <SiGooglepay size={45} className="mx-1" />
          <FaCcMastercard size={45} className="mx-1" />
          <FaCcVisa size={45} className="mx-1" />
          <FaPaypal size={45} className="mx-1" />
        </div>
        <text className="flex justify-center items-center">
          © 2023 Brandon Amarosi
        </text>
      </div>
    </div>
  );
};

export default Footer;
