import * as topojson from "topojson-client";

export const getGraphsData = async (t) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const res = await fetch(`${API_URL}/engineering-habits`);

  const data = await res.json();
  const updatedLabel = new Date(data.computedAt).toLocaleString("De");

  const countriesTopoJsonResponse = await fetch(
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json",
  );

  const countriesTopoJson = await countriesTopoJsonResponse.json();

  // topojson.feature(topology, object)
  // Turns TopoJson (unusable for d3) into GeoJson (easy to manipulate)
  // Toma los arcos compartidos, los convierte en coordenadas y devuelve Poligonos
  // que d3 puede graficar como Paths

  const countriesGeoJson = topojson.feature(
    countriesTopoJson,
    countriesTopoJson.objects.countries,
  );

  return {
    heatMap: data.heatmap.values,
    barChart: data.barChart.values,
    updatedLabel,
    stale: data.stale,
    countries: countriesGeoJson,
  };
};
