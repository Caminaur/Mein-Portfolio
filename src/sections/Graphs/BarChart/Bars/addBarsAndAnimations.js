export const addBarsAndAnimations = (svg, d3Data, height, x, colorScale, y) => {
  svg
    .selectAll(".bar")
    .data(d3Data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("y", height)

    .attr("height", (d) => height - y(d.total))
    .attr("x", (d) => x(d.language))
    .attr("width", x.bandwidth())
    .attr("fill", (d) => colorScale(d.total))

    .attr("opacity", 0)
    .transition()
    .duration(1000)
    .style("fill", (d) => colorScale(d.total))
    .attr("y", (d) => y(d.total))
    .attr("opacity", 1)
    .delay((_, id) => {
      return (id + 1) * 300;
    });

  // Important for a nice animation
  svg
    .append("rect")
    .attr("y", (d) => height)
    .attr("height", 100)
    .style("fill", "#101828")
    .attr("width", 900);
  // Important for a nice animation
};
