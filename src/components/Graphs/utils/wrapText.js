import { select } from "d3";
export const wrapText = (text, width) => {
  text.each(function () {
    const textSel = select(this);
    const words = textSel.text().split(/\s+/).reverse();
    let word;
    let line = [];
    let lineNumber = 0;
    const lineHeight = 1.1; // ems
    const y = textSel.attr("y");
    const dy = parseFloat(textSel.attr("dy") || 0);

    let tspan = textSel
      .text(null)
      .append("tspan")
      .attr("x", width / 2)
      .attr("y", y)
      .attr("dy", dy + "em");

    while ((word = words.pop())) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = textSel
          .append("tspan")
          .attr("x", width / 2)
          .attr("y", y)
          .attr("dy", ++lineNumber * lineHeight + dy + "em")
          .text(word);
      }
    }
  });
};
