export const drawLegend = (svg, data, colorScale, radius, w) => {
  const itemHeight = 20;
  const markerSize = 12;

  const legendGroup = svg
    .append("g")
    .attr("class", "pie-legend")
    // .attr("transform", `translate(${-w / 2 + 20}, ${radius - 50})`);
    .attr(
      "transform",
      w === 300
        ? `translate(${-w / 2}, ${radius - 30})`
        : `translate(${-w / 2 + 20}, ${radius - 50})`,
    );

  const legendItems = legendGroup
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", (_, i) => `translate(0, ${i * itemHeight})`);

  legendItems
    .append("circle")
    .attr("r", markerSize / 2)
    .attr("cx", markerSize / 2)
    .attr("cy", markerSize / 2)
    .attr("fill", (d) => colorScale(d.total));

  legendItems
    .append("text")
    .attr("x", markerSize + 8)
    .attr("y", markerSize / 2 + 4)
    .text((d) => (d.language === "JavaScript" && w === 300 ? "Js" : d.language))
    .style("fill", "white");
};
