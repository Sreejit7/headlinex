import React from "react";
import { useTooltipContext } from "../../contexts/useTooltipContext";
import tooltipStyles from "./tooltip.module.css";

const Tooltip = () => {
  const {
    state: { position, text },
  } = useTooltipContext();

  const tooltipRef = React.useRef();

  React.useEffect(() => {
    if (text) {
      const { top, left } = position;
      tooltipRef.current.style.top = `${top}px`;
      tooltipRef.current.style.left = `${left}px`;
    }
  }, [text, position]);

  return (
    <>
      {text && (
        <span
          ref={tooltipRef}
          className={`${tooltipStyles.tooltip} fixed z-100 bg-white/60 backdrop-blur-sm p-2 rounded-md text-center text-sm font-medium -translate-x-[50%] shadow-lg`}
        >
          {text}
        </span>
      )}
    </>
  );
};

export default Tooltip;
