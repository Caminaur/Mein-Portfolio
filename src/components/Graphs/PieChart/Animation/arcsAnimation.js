import { select } from "d3";

export const arcsAnimation = (arcs, hoverArc, arc) => {
  let isAnimating = true;
  // arcs loading animation
  arcs
    .transition()
    .duration(700)
    .attr("d", arc)
    .delay((_, id) => {
      return (id + 1) * 150;
    })
    .end()
    .then(() => {
      isAnimating = false;
    });
  // hover
  arcs.on("mouseenter", function (event, d) {
    if (isAnimating) return;

    select(`#id-${d.data.language}`)
      .transition()
      .duration(300)
      .attr("opacity", 1);
    select(this)
      .transition()
      .duration(300)
      .style("opacity", 1)
      .attr("d", hoverArc);
  });
  // leave
  arcs.on("mouseleave", function (event, d) {
    if (isAnimating) return;
    select(`#id-${d.data.language}`)
      .transition()
      .duration(300)
      .attr("opacity", 0);

    arcs.transition().duration(300).style("opacity", 0.7).attr("d", arc);
  });
};
