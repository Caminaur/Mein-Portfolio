export const title = (svg, w, t, radius) => {
  const [first, ...rest] = t("metrics.barChart.title").split("█");

  svg
    .append("text")
    .attr("x", 0)
    .attr("y", w === 300 ? -radius - 70 : -radius - 40)
    .attr("text-anchor", "middle")
    .style("fill", "white")
    .style("font-size", "18px")
    .style("font-weight", "700")
    .append("tspan")
    .text(first)
    .attr("x", 0)
    .append("tspan")
    .attr("x", 0)
    .attr("dy", "1.5em")
    .text(rest.join(" "));
};
