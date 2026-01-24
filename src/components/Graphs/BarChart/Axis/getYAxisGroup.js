import { axisLeft } from "d3";

export const getYAxisGroup = (svg, y) => {
  const yAxis = axisLeft(y).ticks(10).tickSize(0).tickPadding(5);

  const yAxisGroup = svg
    .append("g")
    .attr("class", "y axis")
    .style("color", "white")
    .call(yAxis);

  yAxisGroup
    .style("font-size", "12px")
    .call((g) => g.select(".domain").remove());
};
