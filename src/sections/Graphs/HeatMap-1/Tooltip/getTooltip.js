export const getTooltip = (tooltip) => {
  const tooltipBg = tooltip
    .append("rect")
    .attr("rx", 8)
    .attr("ry", 8)
    .attr("fill", "rgba(0,0,0,0.85)")
    .attr("stroke", "rgba(255,255,255,0.12)")
    .attr("stroke-width", 1);

  const t1 = tooltip
    .append("text")
    .attr("fill", "white")
    .style("font-size", "12px")
    .style("font-weight", "700");

  const t2 = tooltip
    .append("text")
    .attr("fill", "rgba(255,255,255,0.9)")
    .style("font-size", "12px")
    .style("font-weight", "600");

  const t3 = tooltip
    .append("text")
    .attr("fill", "rgba(255,255,255,0.7)")
    .style("font-size", "10.5px")
    .style("font-weight", "500");

  return { tooltip, tooltipBg, t1, t2, t3 };
};
