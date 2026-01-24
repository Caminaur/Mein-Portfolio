import { arcsAnimation } from "../Animation/arcsAnimation";
import { pieChartReset } from "../Animation/pieChartReset";

export const animationObserver = (arcs, hoverArc, arc, zeroArc) =>
  new IntersectionObserver(
    (entries, observer) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        // Animating the Arcs
        arcsAnimation(arcs, hoverArc, arc);
      } else {
        pieChartReset(arcs, zeroArc);
      }

      //   observer.unobserve(entry.target);
    },
    { threshold: 0.5 },
  );
