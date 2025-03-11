import { useState, useRef, useEffect } from "react";

function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    if (ref.current) {
      (ref.current as HTMLElement).addEventListener(
        "mouseover",
        handleMouseOver
      );
      (ref.current as HTMLElement).addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (ref.current) {
        (ref.current as HTMLElement).removeEventListener(
          "mouseover",
          handleMouseOver
        );
        (ref.current as HTMLElement).removeEventListener(
          "mouseout",
          handleMouseOut
        );
      }
    };
  }, []);

  return {
    ref,
    isHovered,
  };
}

export default useHover;
