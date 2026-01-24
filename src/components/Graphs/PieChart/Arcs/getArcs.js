import { arc } from "d3";

export const getArcs = (radius) => {
  const zeroArc = arc().innerRadius(0).outerRadius(8);
  const defaultArc = arc().innerRadius(0).outerRadius(radius);
  const hoverArc = arc()
    .innerRadius(0)
    .outerRadius(radius + 10);
  return { zeroArc, defaultArc, hoverArc };
};
