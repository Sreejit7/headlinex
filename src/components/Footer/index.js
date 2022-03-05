import React from "react";
import { MdArrowUpward } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer p-4 flex items-center justify-center">
      <HashLink className="absolute" smooth to="#top">
        <MdArrowUpward className="top-icon" />
      </HashLink>
      <h3 className="font-bold text-lg"> HEADLINER, {new Date().getFullYear()} &copy;</h3>
    </footer>
  );
};

export default Footer;
