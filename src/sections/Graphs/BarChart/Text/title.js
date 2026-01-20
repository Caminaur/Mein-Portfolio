export const title = (svg, w) =>
  svg
    .append("text")
    .style("fill", "white")
    .attr("x", w / 2)
    .attr("y", "-20px")
    .style("font-size", w == 500 ? "22px" : "14px")
    .style("text-anchor", "middle")
    .text("Lines of code per Language");
