import { interpolateBlues, scaleSequential } from "d3";

export const getColor = scaleSequential()
  .domain([0, 100])
  .interpolator(interpolateBlues);
