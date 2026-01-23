import { axisLeft } from "d3";

export const getYAxis = (svg, y) => {
  const yAxis = axisLeft(y);

  const yAxisGroup = svg.append("g").call(yAxis);
  yAxisGroup
    .selectAll("text")
    .style("fill", "white")
    .style("font-size", "14px")
    .style("font-weight", "600")
    .attr("transform", `translate(5,-10)`)
    .style("rotate", "-45deg");
  yAxisGroup.selectAll("path, line").style("stroke", "white");
};
