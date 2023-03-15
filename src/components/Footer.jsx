import React from "react";
import { footerData } from "../footerLinks";
import FooterField from "./FooterField";

const Footer = () => {
  return (
    <div className="bg-black py-6">
      {footerData.map((tier) => (
        <FooterField data={tier} />
      ))}
    </div>
  );
};

export default Footer;
