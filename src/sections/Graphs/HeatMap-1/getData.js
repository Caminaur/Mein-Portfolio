import { heatmapByHourRanges } from "./heatmapByHourRanges";

export const getHeatMapData = async (t) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const res = await fetch(`${API_URL}/engineering-habits`);

  const data = await res.json();
  const updatedLabel = new Date(data.computedAt).toLocaleString("De");
  return [
    heatmapByHourRanges(data.heatmap.values, t),
    updatedLabel,
    data.stale,
  ];
};

export const getBarChartData = async (t) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const res = await fetch(`${API_URL}/engineering-habits`);

  const data = await res.json();
  const updatedLabel = new Date(data.computedAt).toLocaleString("De");

  return [data.barChart.values, updatedLabel, data.stale];
};
