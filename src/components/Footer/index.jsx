import React from "react";
import { MdArrowUpward } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import {
  TooltipActionTypes,
  useTooltipContext,
} from "../../contexts/useTooltipContext";

const Footer = () => {
  const {
    state: { text },
    dispatch,
  } = useTooltipContext();

  // On hovering the 'scroll to top' button, show a tooltip
  const handleMouseHover = (e) => {
    const { top, left, right } = e.target.getBoundingClientRect();
    dispatch({
      type: TooltipActionTypes.CREATE_TOOLTIP,
      text: "Scroll to top",
      position: { top: top - 50, left: (left + right) / 2 },
    });
  };

  const resetTooltip = () => {
    dispatch({ type: TooltipActionTypes.DELETE_TOOLTIP });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-700 py-6 px-4 flex items-center justify-center text-white">
      <HashLink
        aria-label="Scroll to top"
        onMouseEnter={(e) => handleMouseHover(e)}
        onMouseLeave={resetTooltip}
        onClick={resetTooltip}
        className="absolute"
        smooth
        to="#top"
      >
        <MdArrowUpward
          className="absolute bottom-16 text-2xl font-bold animate-[bounce_.8s_ease-in-out_infinite] transition duration-700 hover:text-red-600"
          role="button"
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
            className="transition duration-700 hover:underline text-slate-100 hover:text-white"
          >
            @Sreejit
          </a>{" "}
          tinkering with{" "}
          <a
            href="https://www.gnews.io"
            target="_blank"
            rel="noreferrer"
            className="transition duration-700 hover:underline text-slate-100 hover:text-white"
          >
            GNews
          </a>
        </span>
      </section>
    </footer>
  );
};

export default Footer;
