import { ascending } from "d3";

export const prepareData = (data) => {
  let totalSum = 0;
  Object.entries(data).forEach(([language, total]) => {
    totalSum += parseInt(total);
  });

  data = Object.entries(data)
    .map(([language, total], index) => ({
      id: index + 1,
      language,
      total,
      percentage: (total * 100) / totalSum,
    }))
    .sort((a, b) => ascending(b.total, a.total))
    .slice(0, 6);

  data.forEach((d) => {
    d.total = parseInt(d.total);
  });

  return data;
};
