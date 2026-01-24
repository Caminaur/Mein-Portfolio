// import { heatmapByHourRanges } from "./heatmapByHourRanges";

export const getGraphsData = async (t) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const res = await fetch(`${API_URL}/engineering-habits`);

  const data = await res.json();
  const updatedLabel = new Date(data.computedAt).toLocaleString("De");
  return {
    heatMap: data.heatmap.values,
    barChart: data.barChart.values,
    updatedLabel,
    stale: data.stale,
  };
};
