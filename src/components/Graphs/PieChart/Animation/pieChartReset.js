export const pieChartReset = (arcs, zeroArc) => {
  arcs
    .transition()
    .duration(700)
    .attr("d", zeroArc)
    .delay((_, id) => {
      return (id + 1) * 150;
    });
};
