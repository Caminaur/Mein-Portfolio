import { heatmapByHourRanges } from "./heatmapByHourRanges";

export const getData = async (t) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const res = await fetch(`${API_URL}/api/engineering-habits`);

  const data = await res.json();
  const updatedLabel = new Date(data.computedAt).toLocaleString("De");
  return [
    heatmapByHourRanges(data.heatmap.values, t),
    updatedLabel,
    data.stale,
  ];
};
