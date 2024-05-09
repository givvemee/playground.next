import { useRef } from "react";
import { animated, config, useSpring } from "react-spring";
import { useToggle } from "./hooks/useToggle";
import "./style.css";

const HamburgerMenu = ({ size = 100, strokeWidth = 5 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, toggleIsOpen] = useToggle(true);

  const [{ opacity, rotate, y }, spring] = useSpring(() => ({
    rotate: "0deg",
    y: "0px",
    opacity: 1,
    config: config.stiff,
  }));

  const calculateLineOffsetY = (
    height: number | undefined,
    strokeWidth: number | undefined
  ): string | undefined => {
    if (!height || !strokeWidth) return;
    const lineOffsetY = height / 2 - strokeWidth / 2;
    return `${lineOffsetY}px`;
  };

  function toggleMenu(): void {
    if (ref.current) {
      isOpen
        ? spring.start({
            rotate: "45deg",
            y: calculateLineOffsetY(ref.current.clientHeight, strokeWidth),
            opacity: 0,
          })
        : spring.start({ rotate: "0deg", y: "0px", opacity: 1 });
    }
    toggleIsOpen();
  }

  return (
    <button onClick={toggleMenu} className="button">
      <div ref={ref} className="lines">
        <animated.div style={{ rotate, y }} className="line" />
        <animated.div style={{ opacity }} className="line" />
        <animated.div
          style={{
            rotate: rotate.to((rotate) => `-${rotate}`),
            y: y.to((y) => `-${y}`),
          }}
          className="line"
        />
      </div>
    </button>
  );
};

export default HamburgerMenu;
