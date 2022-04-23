import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
import Search from "../Search";
function Header({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);
  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 60) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  return (
    <header
      className={`bg-gray-700 sticky flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:justify-between p-6 ${
        toggle && "header__toggle"
      } ${scrollNav && "scrolling"}`}
    >
      <HashLink smooth to="#top" className="logo-link">
        {" "}
        <h1 className="transition duration-700 bg-gradient-to-r from-transparent to-red-700 px-4 py-2 rounded-md shadow-lg text-white text-2xl font-bold hover:ring-1 hover:ring-white">
          HeadlineX
        </h1>{" "}
      </HashLink>
      <Search />
    </header>
  );
}

export default Header;
