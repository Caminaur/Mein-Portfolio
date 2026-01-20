import { axisBottom } from "d3";
import { wrapText } from "../../utils/wrapText";

export const getXAxisGroup = (svg, height, w, x) => {
  const xAxis = axisBottom(x).tickSize(0).tickPadding(10);

  const xAxisGroup = svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0,${height})`)
    .style("font-size", w == 500 ? "14px" : "12px")
    .style("color", "white")
    .call(xAxis);

  xAxisGroup.selectAll("path").style("stroke-width", "2.75px");
  xAxisGroup.selectAll("text").call(wrapText, x.bandwidth());
};
