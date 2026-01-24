import { arc } from "d3";
import { parsePercentage } from "../../utils/parsePercentage";

export const drawLabels = (arcsData, radius, svg) => {
  const labelArc = arc()
    .innerRadius(radius * 0.5)
    .outerRadius(radius * 0.5);

  const labelsGroup = svg.append("g").attr("class", "pie-labels");

  labelsGroup
    .selectAll("text")
    .data(arcsData)
    .enter()
    .append("text")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill", "white")
    .attr("font-weight", 700)
    .style("font-size", "18px")
    .attr("opacity", 0)
    .style("pointer-events", "none")
    .text((d) => `${d.data.language} - ${parsePercentage(d.data.percentage)}`)
    .attr("id", (d) => `id-${d.data.language}`)
    .attr("transform", (d) => {
      const [x, y] = labelArc.centroid(d);
      return `translate(${x}, ${y})`;
    });
};
