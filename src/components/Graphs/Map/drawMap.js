import { prepareContainer } from "./Container/prepareContainer";
import { getColor } from "./Color/getColor";
import { getPath } from "./Path/getPath";
import { drawPaths } from "./Path/drawPaths";
import { handleZoomBehaviour } from "./Zoom/handleZoomBehaviour";

export const drawMap = (ref, geoJson, t, w, h) => {
  const { svg } = prepareContainer(ref, w, h);
  const WORLD_WIDTH = 500;
  const WORLD_HEIGHT = 500;

  const g = svg.append("g");

  const path = getPath(WORLD_WIDTH, WORLD_HEIGHT, geoJson);

  handleZoomBehaviour(svg, g, WORLD_WIDTH, WORLD_HEIGHT);

  drawPaths(g, geoJson, path, getColor, svg);
};
