export const addBars = (svg, d3Data, height, x, colorScale, y) => {
  const bars = svg
    .selectAll(".bar")
    .data(d3Data)
    .enter()
    // Rect
    .append("rect")
    .attr("class", "bar")
    .attr("cursor", "pointer")
    .attr("y", height)
    .attr("height", (d) => height - y(d.total))
    .attr("x", (d) => x(d.language))
    .attr("width", x.bandwidth())
    .attr("fill", (d) => colorScale(d.total))
    .attr("opacity", 0);

  // Important for a nice animation
  svg
    .append("rect")
    .attr("y", (d) => height)
    .attr("height", 100)
    .style("fill", "#101828")
    .attr("width", 900);
  // Important for a nice animation

  return bars;
};
