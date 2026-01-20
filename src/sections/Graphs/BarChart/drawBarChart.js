import { scaleOrdinal, schemeTableau10, select } from "d3";
import { title } from "./Text/title";
import { getXAxisGroup } from "./Axis/getXAxisGroup";
import { getYAxisGroup } from "./Axis/getYAxisGroup";
import { addBarsAndAnimations } from "./Bars/addBarsAndAnimations";
import { prepareData } from "./Data/prepareData";
import { prepareContainer } from "./Container/prepareContainer";
import { xScale } from "./Scales/xScale";
import { yScale } from "./Scales/yScale";

export const drawBarChart = (ref, data, t, w, h) => {
  const container = select(ref);
  container.selectAll("*").remove();

  const { svg, width, height } = prepareContainer(container, w, h);

  // Data
  const d3Data = prepareData(data);

  // Color
  const colorScale = scaleOrdinal(schemeTableau10);

  // scales
  const x = xScale(d3Data, width);
  const y = yScale(d3Data, height);

  // Bars
  addBarsAndAnimations(svg, d3Data, height, x, colorScale, y);

  // Title
  title(svg, w);

  // XAxis
  getXAxisGroup(svg, height, w, x);

  // YAxis
  getYAxisGroup(svg, y);
};
