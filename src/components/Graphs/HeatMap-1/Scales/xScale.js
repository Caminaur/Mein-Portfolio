import { scaleBand } from "d3";

export const xScale = (width, xDomain) =>
  scaleBand().range([0, width]).domain(xDomain).padding(0.02);
