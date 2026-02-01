import { select } from "d3";

export const createMapTooltip = () => {
  const tooltip = select("body")
    .append("div")
    .attr("id", "map-tooltip")
    .style("position", "fixed")
    .style("pointer-events", "none")
    .style("background", "rgba(0,0,0,0.8)")
    .style("color", "white")
    .style("padding", "6px 10px")
    .style("border-radius", "6px")
    .style("font-size", "14px")
    .style("opacity", 0)
    .style("z-index", 1000);

  const show = (event, text) => {
    tooltip
      .style("opacity", 1)
      .html(text)
      .style("left", `${event.clientX + 12}px`)
      .style("top", `${event.clientY + 12}px`);
  };

  const hide = () => {
    tooltip.style("opacity", 0);
  };

  return { show, hide };
};
