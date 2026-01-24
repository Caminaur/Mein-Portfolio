import { scaleBand } from "d3";

export const yScale = (height, yDomain) =>
  scaleBand().range([height, 0]).domain(yDomain).padding(0.02);
