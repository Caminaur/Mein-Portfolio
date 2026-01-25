export const title = (svg, w, t) => {
  const [first, ...rest] = t("metrics.heatMap.title").split("█");

  svg
    .append("text")
    .attr("x", w / 2)
    .attr("y", -30)
    .attr("text-anchor", "middle")
    .style("fill", "white")
    .style("font-size", "18px")
    .style("font-weight", "700")
    .append("tspan")
    .text(first)
    .attr("x", w / 2)
    .append("tspan")
    .attr("x", w / 2)
    .attr("dy", "1.2em")
    .text(rest.join(" "));
};
