import { dayKeys } from "./dayKeys";

export const HOUR_BUCKETS = [
  { label: "0:00–3:00", from: 0, to: 3 },
  { label: "4:00–7:00", from: 4, to: 7 },
  { label: "8:00–11:00", from: 8, to: 11 },
  { label: "12:00–15:00", from: 12, to: 15 },
  { label: "16:00–19:00", from: 16, to: 19 },
  { label: "20:00–23:00", from: 20, to: 23 },
];

// values: [{day, hour, count}, ...]
export function heatmapByHourRanges(values, t) {
  // day -> bucketIndex -> {sum, n}
  const acc = Array.from({ length: 7 }, () =>
    Array.from({ length: HOUR_BUCKETS.length }, () => ({ sum: 0, n: 0 })),
  );

  values.forEach(({ day, hour, count }) => {
    const b = HOUR_BUCKETS.findIndex((x) => hour >= x.from && hour <= x.to);
    if (b >= 0) {
      acc[day][b].sum += count;
      acc[day][b].n += 1;
    }
  });

  // salida con shape para tu drawHeatmap: {group, variable, count}
  return acc.flatMap((row, day) =>
    row.map((cell, b) => ({
      group: HOUR_BUCKETS[b].label, // eje X
      variable: dayKeys(t)[day], // eje Y
      count: cell.n ? cell.sum / cell.n : 0, // promedio dentro del rango horario
    })),
  );
}
