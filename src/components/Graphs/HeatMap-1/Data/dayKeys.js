export const genericDayKeys = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
export const dayKeys = (t) => genericDayKeys.map((k) => t(`heatMap.days.${k}`));
