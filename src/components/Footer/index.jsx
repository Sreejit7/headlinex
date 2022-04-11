import React from "react";
import { MdArrowUpward } from "react-icons/md";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-red-700 py-6 px-4 flex items-center justify-center text-white">
      <HashLink
        aria-label="Scroll to top"
        className="absolute"
        smooth
        to="#top"
      >
        <MdArrowUpward
          className="absolute bottom-16 text-2xl font-bold animate-[bounce_.8s_ease-in-out_infinite] transition duration-700 hover:text-red-600"
          role="button"
          title="Back To Top"
        />
      </HashLink>
      <section className="flex-col items-center">
        <h3 className="font-medium text-lg text-center my-2">
          HeadlineX, {new Date().getFullYear()} &copy;
        </h3>
        <span className="text-sm text-center text-slate-300">
          Built as a result of{"  "}
          <a
            href="https://www.sreejit.dev"
            target="_blank"
            rel="noreferrer"
            className="transition duration-600 hover:underline text-slate-100 hover:text-white"
          >
            @Sreejit
          </a>{" "}
          tinkering with{" "}
          <a
            href="https://www.gnews.io"
            target="_blank"
            rel="noreferrer"
            className="transition duration-600 hover:underline text-slate-100 hover:text-white"
          >
            GNews
          </a>
        </span>
      </section>
    </footer>
  );
};

export default Footer;
