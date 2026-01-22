import { scaleOrdinal, schemeTableau10, select } from "d3";
import { title } from "./Text/title";
import { getXAxisGroup } from "./Axis/getXAxisGroup";
import { getYAxisGroup } from "./Axis/getYAxisGroup";
import { addBars } from "./Bars/addBars";
import { prepareData } from "./Data/prepareData";
import { prepareContainer } from "./Container/prepareContainer";
import { xScale } from "./Scales/xScale";
import { yScale } from "./Scales/yScale";
import { animationObserver } from "./Observer/animationObserver";

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
  const bars = addBars(svg, d3Data, height, x, colorScale, y);

  // Observer
  const observer = animationObserver(bars, colorScale, y, x, height);
  const elementToObserve = container.node();
  observer.observe(elementToObserve);

  // Hover Effect
  // hoverAnimation(bars, x);

  // Title
  title(svg, width, t);

  // XAxis
  getXAxisGroup(svg, height, w, x);

  // YAxis
  getYAxisGroup(svg, y);
};
