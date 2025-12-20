import * as d3 from "d3";
export const genericDayKeys = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
export const dayKeys = (t) => genericDayKeys.map((k) => t(`heatMap.days.${k}`));
export const groups = [
  "0:00–3:00",
  "4:00–7:00",
  "8:00–11:00",
  "12:00–15:00",
  "16:00–19:00",
  "20:00–23:00",
];

// Labels cortos SOLO para mobile (ejes)
export const groupShort = {
  "0:00–3:00": "0–3",
  "4:00–7:00": "4–7",
  "8:00–11:00": "8–11",
  "12:00–15:00": "12–15",
  "16:00–19:00": "16–19",
  "20:00–23:00": "20–23",
};

export function createHeatmapConfig(containerWidth, t) {
  const isMobile = containerWidth < 640;

  const margin = isMobile
    ? { top: 44, right: 10, bottom: 52, left: 46 }
    : { top: 65, right: 65, bottom: 65, left: 65 };

  // NO min width: si el contenedor mide 320, el SVG mide 320.
  const outerWidth = Math.min(containerWidth, 720);
  const outerHeight = isMobile
    ? Math.round(Math.min(520, Math.max(380, outerWidth * 1.15)))
    : 650;

  const width = Math.max(1, outerWidth - margin.left - margin.right);
  const height = Math.max(1, outerHeight - margin.top - margin.bottom);

  const xDomain = isMobile ? dayKeys(t) : groups;
  const yDomain = isMobile ? groups : dayKeys(t);

  const x = d3.scaleBand().range([0, width]).domain(xDomain).padding(0.02);
  const y = d3.scaleBand().range([height, 0]).domain(yDomain).padding(0.02);

  const color = d3.scaleLinear().range(["lightsteelblue", "#01227E"]);

  return {
    margin,
    width,
    height,
    outerWidth,
    outerHeight,
    x,
    y,
    color,
    isMobile,
  };
}
