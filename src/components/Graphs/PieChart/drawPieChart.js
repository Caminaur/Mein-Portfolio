import { scaleOrdinal, schemeTableau10, select } from "d3";
import { prepareContainer } from "./Container/prepareContainer";
import { prepareData } from "../BarChart/Data/prepareData";
import { getPieLayout } from "./Layout/getPieLayout";
import { drawArcs } from "./Arcs/drawArcs";
import { getArcs } from "./Arcs/getArcs";
import { animationObserver } from "./Observer/animationObserver";
import { title } from "./Text/title";
import { drawLegend } from "./Legend/drawLegend";
import { drawLabels } from "./Labels/drawLabels";

export const drawPieChart = (ref, data, t, w, h) => {
  const container = select(ref);

  container.selectAll("*").remove();

  const { svg, width, height } = prepareContainer(container, w, h);

  // Data
  const d3Data = prepareData(data);

  // Color
  const colorScale = scaleOrdinal(schemeTableau10);

  // Radius and Arcs
  const { radius, arcsData } = getPieLayout(width, height, d3Data);

  // Arc Generator
  const { zeroArc, defaultArc, hoverArc } = getArcs(radius);

  // Title
  title(svg, w, t, radius);

  // Drawing the Arcs
  const arcs = drawArcs(svg, arcsData, colorScale, zeroArc);

  // Observer
  const observer = animationObserver(arcs, hoverArc, defaultArc, zeroArc);
  const elementToObserve = container.node();
  observer.observe(elementToObserve);

  // Labels
  drawLabels(arcsData, radius, svg);

  // Leyend
  drawLegend(svg, d3Data, colorScale, radius, w);
};
