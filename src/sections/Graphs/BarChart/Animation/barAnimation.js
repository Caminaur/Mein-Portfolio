import { select, selectAll } from "d3";

export const barAnimation = (svg, colorScale, y, x) => {
  let isAnimating = true;

  svg
    .transition()
    .duration(1000)
    .style("fill", (d) => colorScale(d.total))
    .attr("y", (d) => y(d.total))
    .attr("opacity", 1)
    .delay((_, id) => {
      // Diferent delay on each element
      return (id + 1) * 300;
    })
    .on("end", function (d, i, list) {
      // solo cuando termina la última barra
      if (i === list.length - 1) {
        isAnimating = false;
      }
    });

  const parsePercentage = (number) => {
    const num = new Intl.NumberFormat("es-ES", {
      maximumFractionDigits: 1,
    }).format(number);

    return `${num} %`;
  };
  svg.each(function (d) {
    select(this.parentNode)
      .append("text")
      .attr("class", "bar-label")
      .attr("id", `${d.language}-percentage`)
      .text(parsePercentage(d.percentage))
      .attr("x", x(d.language) + x.bandwidth() / 2)
      .attr("y", y(d.total) - 8)
      .attr("text-anchor", "middle")
      .style("fill", "white")
      .style("font-size", "18px")
      .attr("opacity", 0)
      .style("font-weight", "700");
  });

  svg
    .on("mouseenter", function (event, d) {
      if (isAnimating) return;

      const labelId = `#${d.language}-percentage`;

      selectAll(".bar").attr("opacity", 0.3);
      selectAll(".bar-label").attr("opacity", 0);

      select(this)
        .transition()
        .duration(300)
        .attr("opacity", 1)
        .attr("width", x.bandwidth() + 6)
        .attr("x", x(d.language) - 3);

      select(labelId).transition().duration(200).attr("opacity", 1);
    })
    .on("mouseleave", function (event, d) {
      if (isAnimating) return;

      const labelId = `#${d.language}-percentage`;

      selectAll(".bar")
        .transition()
        .duration(300)
        .attr("opacity", 1)
        .attr("x", (d) => x(d.language))
        .attr("width", x.bandwidth());

      select(labelId).transition().duration(200).attr("opacity", 0);
    });
};
