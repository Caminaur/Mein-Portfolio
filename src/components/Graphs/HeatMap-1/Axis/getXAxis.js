import { axisBottom } from "d3";

export const getXAxis = (svg, height, x, w) => {
  const xAxis = axisBottom(x).tickSize(0).tickPadding(10);

  const xAxisGroup = svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(xAxis);

  xAxisGroup.selectAll("path").style("stroke-width", "2.75px");
  xAxisGroup
    .selectAll("text")
    .style("fill", "white")
    .style("font-size", "14px")
    .style("font-weight", "600")
    .text((d) => `${d}h`);

  if (w <= 300) {
    xAxisGroup
      .selectAll("text")
      .attr("transform", `translate(0,10) rotate(-25)`);
  }
  xAxisGroup.selectAll("path, line").style("stroke", "white");
};
