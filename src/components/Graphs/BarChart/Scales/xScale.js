import { scaleBand } from "d3";

export const xScale = (d3Data, width) =>
  scaleBand()
    .range([0, width])
    .padding(0.07)
    .domain(d3Data.map((d) => d.language));
