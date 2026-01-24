export const drawArcs = (svg, arcsData, colorScale, zeroArc) =>
  svg
    .selectAll("path")
    .data(arcsData)
    .enter()
    .append("path")
    .attr("d", zeroArc)
    .attr("fill", (d) => colorScale(d.data.total))
    .attr("stroke", "black")
    .style("stroke-width", "1.5px")
    .style("opacity", 0.7)
    .style("cursor", "pointer");
