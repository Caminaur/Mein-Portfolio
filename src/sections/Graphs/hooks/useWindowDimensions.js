import { useEffect, useState } from "react";

export function useWindowDimensions() {
  const getDimensions = () => {
    const w = window.innerWidth;

    if (w >= 600) {
      return { width: 500, height: 500 };
    } else if (w < 600 && w >= 450) {
      return { width: 400, height: 400 };
    } else {
      return { width: 300, height: 400 };
    }
  };

  const [dimensions, setDimensions] = useState(getDimensions);

  useEffect(() => {
    let timeOut = null; // declara id de timeout

    /** Se encarga de
     * 1. Si hay timeout, eliminarlo y crear uno nuevo
     * 2. Una vez que se cumplan los 150 segundos se ejecutara el ultimo timeout
     */
    const onResize = () => {
      if (timeOut) {
        clearTimeout(timeOut);
      }
      timeOut = setTimeout(() => {
        setDimensions(getDimensions());
      }, 150);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (timeOut) clearTimeout(timeOut);
    };
  }, []);
  return dimensions;
}
