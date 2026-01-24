import { axisBottom } from "d3";

export const getXAxisGroup = (svg, height, w, x) => {
  const xAxis = axisBottom(x).tickSize(0).tickPadding(10);
  const xAxisGroup = svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0,${height})`)
    .style("font-size", w == 500 ? "14px" : "12px")
    .style("color", "white")
    .call(xAxis);

  if (w <= 300) {
    xAxisGroup.selectAll(".tick").attr("transform", (d, i) => {
      const xPos = x(d) + x.bandwidth() / 2;
      const yOffset = i % 2 === 0 ? 15 : 0;
      return `translate(${xPos}, ${yOffset})`;
    });
  }

  xAxisGroup.selectAll("path").style("stroke-width", "2.75px");
};
