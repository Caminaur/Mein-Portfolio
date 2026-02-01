import { select } from "d3";
export const prepareContainer = (ref) => {
  const container = select(ref);
  const WORLD_WIDTH = 500;
  const WORLD_HEIGHT = 500;

  container.selectAll("*").remove();

  return {
    svg: container
      .append("svg")
      .attr("viewBox", `0 0 ${WORLD_WIDTH} ${WORLD_HEIGHT}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("width", "100%")
      .style("height", "100%")
      .style("touch-action", "none")
      .style("color", "#D1C4C4"),
  };
};
