import { scaleLinear, select } from "d3";
import { prepareContainer } from "./Container/prepareContainer";
import { heatmapByHourRanges } from "./Data/heatmapByHourRanges";
import { title } from "./Text/title";
import { getXAxis } from "./Axis/getXAxis";
import { getYAxis } from "./Axis/getYAxis";
import { xScale } from "./Scales/xScale";
import { yScale } from "./Scales/yScale";
import { addCells } from "./Cells/addCells";
import { dayKeys } from "./Data/dayKeys";

export function drawHeatmap(ref, d, t, w, h) {
  const container = select(ref);

  container.selectAll("*").remove();

  const { svg, width, height, groups } = prepareContainer(container, w, h);

  const data = heatmapByHourRanges(d, t);

  const xDomain = groups;
  const yDomain = dayKeys(t);

  // scales
  const x = xScale(width, xDomain);
  const y = yScale(height, yDomain);

  const minCount = Math.min(...data.map((d) => d.count));
  const maxCount = Math.max(...data.map((d) => d.count));
  const color = scaleLinear()
    .domain([minCount, maxCount])
    .range(["lightsteelblue", "#01227E"]);

  const titleSpan = title(svg, width, t);

  getXAxis(svg, height, x, w);
  getYAxis(svg, y);

  // Layers
  const cellsLayer = svg.append("g");
  const overlayLayer = svg.append("g");

  const tooltip = overlayLayer
    .append("g")
    .style("display", "none")
    .style("pointer-events", "none");

  addCells(cellsLayer, data, x, y, color, svg, t, width, height, tooltip);
}
