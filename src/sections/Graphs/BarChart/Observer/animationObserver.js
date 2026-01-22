import { barAnimation } from "../Animation/barAnimation";
import { barReset } from "../Animation/barReset";

export const animationObserver = (bars, colorScale, y, x, height) =>
  new IntersectionObserver(
    (entries, observer) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        barAnimation(bars, colorScale, y, x);
      } else {
        barReset(bars, colorScale, height);
      }

      //   observer.unobserve(entry.target);
    },
    { threshold: 0.5 },
  );
