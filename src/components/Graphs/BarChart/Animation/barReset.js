export const barReset = (svg, colorScale, height) =>
  svg
    .transition()
    .duration(1000)
    .attr("fill", (d) => colorScale(d.total))
    .attr("y", height)
    .attr("opacity", 0)
    .delay((_, id) => {
      // Diferent delay on each element
      return (id + 1) * 100;
    });
