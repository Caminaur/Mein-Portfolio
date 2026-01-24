import { max, scaleLinear } from "d3";

export const yScale = (d3Data, height) => {
  const maxVal = max(d3Data, (d) => d.total) ?? 1;
  return scaleLinear().range([height, 0]).domain([0, maxVal]).nice(); // revisar
};
