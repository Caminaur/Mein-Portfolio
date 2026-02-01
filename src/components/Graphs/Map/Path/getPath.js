import { geoMercator, geoPath } from "d3";

export const getPath = (width, height, geoJson) => {
  // convierte coordenadas en pixeles
  const projection = geoMercator().fitSize([width, height], geoJson);

  // Convierte la projection en un path para usar
  return geoPath(projection);
};
