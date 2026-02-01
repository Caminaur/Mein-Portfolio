import { select } from "d3";
import { createMapTooltip } from "../Tooltip/mapTooltip";
import { randomNumber } from "../../utils/randomNumber";

export const drawPaths = (g, geoJson, path, color, svg) => {
  const tooltip = createMapTooltip();

  geoJson.features.forEach((element) => {
    element.properties.count = randomNumber(0, 100);
  });

  const country = g
    .selectAll("path")
    .data(geoJson.features)
    .enter()
    .append("path")
    .attr("class", "country")
    .attr("d", path)
    .attr("fill", (d) => color(d.properties.count))
    .attr("cursor", "pointer")
    .attr("opacity", 0.9);

  country.on("mouseenter", function (e, d) {
    select(this)
      .attr("stroke", "navy")
      .attr("stroke-width", 0.6)
      .attr("opacity", 1);
  });

  country.on("mouseleave", function (e, d) {
    select(this).attr("stroke-width", 0).attr("opacity", 0.9);
  });

  country
    .append("title")
    .text((d) => `Country: ${d.properties.name}\n`)

    .append("title")
    .text((d) => `Country: ${d.properties.count}\n`);
};
