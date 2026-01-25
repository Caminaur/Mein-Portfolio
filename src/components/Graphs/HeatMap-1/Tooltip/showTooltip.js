import { pointer } from "d3";
import { getTooltip } from "./getTooltip";

export const showTooltip = (event, d, svg, t, width, height, tooltip) => {
  const [mx, my] = pointer(event, svg.node());

  // Prepare tooltip
  const { tooltipBg, t1, t2, t3 } = getTooltip(tooltip);
  tooltip.raise();

  const line1 = `${d.variable} · ${d.group}`;
  const line2 = `${t("metrics.heatMap.tooltip1")} ${d.count.toFixed(2)}`;
  const line3 = t("metrics.heatMap.tooltip2");

  t1.text(line1);
  t2.text(line2);
  t3.text(line3);

  const padX = 10;
  const padY = 20;
  const gap = 16;

  t1.attr("x", 0).attr("y", 0);
  t2.attr("x", 0).attr("y", gap);
  t3.attr("x", 0).attr("y", gap * 2);

  const b1 = t1.node().getBBox();
  const b2 = t2.node().getBBox();
  const b3 = t3.node().getBBox();

  const w = Math.max(b1.width, b2.width, b3.width) + padX * 2;
  const h = b3.y + b3.height + padY * 2;

  tooltipBg.attr("width", w).attr("height", h);

  const offset = 12;
  let tx = mx + offset;
  let ty = my + offset;

  if (tx + w > width) tx = mx - w - offset;
  if (ty + h > height) ty = my - h - offset;

  tx = Math.max(0, Math.min(width - w, tx));
  ty = Math.max(0, Math.min(height - h, ty));

  tooltip.attr("transform", `translate(${tx},${ty})`);
  t1.attr("transform", `translate(${padX},${padY + 12})`);
  t2.attr("transform", `translate(${padX},${padY + 12})`);
  t3.attr("transform", `translate(${padX},${padY + 12})`);

  tooltip.style("display", null);
};
