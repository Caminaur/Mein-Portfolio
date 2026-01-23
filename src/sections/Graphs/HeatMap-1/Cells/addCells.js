import { hideTooltip } from "../Tooltip/hideTooltip";
import { showTooltip } from "../Tooltip/showTooltip";
import { select } from "d3";
export const addCells = (
  cellsLayer,
  data,
  x,
  y,
  color,
  svg,
  t,
  width,
  height,
  tooltip,
) =>
  cellsLayer
    .selectAll("rect.cell")
    .data(data, (d) => `${d.group}:${d.variable}`)
    .join("rect")
    .attr("class", "cell")
    .attr("x", (d) => x(d.group))
    .attr("y", (d) => y(d.variable))
    .attr("width", x.bandwidth())
    .attr("height", y.bandwidth())
    .attr("fill", (d) => color(d.count))
    .style("cursor", "pointer")
    .on("mouseenter", function (event, d) {
      select(this).attr("stroke", "white").attr("stroke-width", 2);
      showTooltip(event, d, svg, t, width, height, tooltip);
    })
    .on("mousemove", function (event, d) {
      showTooltip(event, d, svg, t, width, height, tooltip);
    })
    .on("mouseleave", function () {
      select(this).attr("stroke", "none");
      hideTooltip(tooltip);
    });
