import React from "react";
import { footerData, presets } from "../data";
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
    <div>
    <div className="bg-black py-6 md:px-6 md:flex md:justify-around">
      <div className="md:hidden">
      {footerData.map((tier) => (
        <FooterField data={tier} key={tier.label} />
      ))}
      </div>
      <div className="flex justify-center items-center md:hidden">
        <hr className="w-[90%] my-4 md:w-[98%]" />
      </div>
      <div className="text-white px-6 md:px-2 lg:px-6 hidden md:block">
        <h1 className="text-2xl mb-6">SOCIALS</h1>
        <div className="flex flex-col gap-5 text-lg">
          {footerData[0].links.map((social) => (
            <a href={social.href}>{social.linkLabel}</a>
          ))}
        </div>
      </div>
        <div className="text-white px-6 md:px-2 lg:px-6 hidden md:block">
        <h1 className="text-2xl mb-6">LIGHTROOM PRESETS</h1>
        <div className="flex flex-col gap-5 text-lg">
        {presets.map((preset) => (
            <a href={`/presets/${preset.id}`}>{preset.shortName}</a>
          ))}
        </div>
      </div>
      <div className="text-white px-6 md:px-2 lg:px-6 md:max-w-[300px]">
        <h1 className="text-2xl mb-6">SUBSCRIBE!</h1>
        <p className="text-xl ">
          Sign up to get offers, free mobile wallpapers and the first to know
          about new products!
        </p>
        <div className="flex border-solid border-white border-2 items-center my-6 w-3/5 :w-full">
          <AiOutlineMail className="mx-2" size={35} />
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="email"
              className="bg-black text-white border-none outline-none w-[90%]"
              placeholder="Enter your email"
            />
          </form>
        </div>
      </div>
    </div>
      <div className="text-white bg-black pb-6">
        <div className="flex flex-wrap justify-center mx-8 py-4 items-center md:min-h-[200px]">
          <FaCcAmex size={45} className="mx-1" />
          <SiApplepay size={45} className="mx-1" />
          <SiGooglepay size={45} className="mx-1" />
          <FaCcMastercard size={45} className="mx-1" />
          <FaCcVisa size={45} className="mx-1" />
          <FaPaypal size={45} className="mx-1" />
        </div>
        <h4 className="flex justify-center items-center">
          © 2023 Brandon Amarosi
        </h4>
      </div>
    </div>
  );
};

export default Footer;
