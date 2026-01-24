import { pie } from "d3";

export const getPieLayout = (width, height, d3Data) => {
  const radius = Math.min(width, height) / 2;
  const pieGenerator = pie().value((d) => d.total);
  const arcs = pieGenerator(d3Data);

  return { radius, arcsData: arcs };
};
