import { zoom, zoomIdentity } from "d3";
import { createMapTooltip } from "../Tooltip/mapTooltip";

export const handleZoomBehaviour = (svg, g, width, height) => {
  const tooltip = createMapTooltip();

  const INITIAL_SCALE = 4;
  function zoomed({ transform }) {
    g.attr("transform", transform);
  }

  const zoomBehavior = zoom()
    .scaleExtent([1, 8])
    .extent([
      [0, 0],
      [width, height],
    ])
    .translateExtent([
      [0, 0],
      [width, height],
    ])
    .on("zoom", (event) => {
      tooltip.hide();

      g.attr("transform", event.transform);
    });

  svg.call(zoomBehavior);

  svg.call(
    zoomBehavior.transform,
    zoomIdentity
      .translate(
        (width * (1 - INITIAL_SCALE)) / 2,
        (height * (1 - INITIAL_SCALE)) / 2,
      )
      .scale(INITIAL_SCALE),
  );

  svg
    .on("wheel", (event) => event.preventDefault())
    .on("touchmove", (event) => event.preventDefault());
};
