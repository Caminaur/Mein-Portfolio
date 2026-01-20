import * as d3 from "d3";
import { createHeatmapConfig, groupShort } from "./config";
import { heatmapByHourRanges } from "./heatmapByHourRanges";

export function drawHeatmap(container, d, t) {
  d3.select(container).selectAll("*").remove();

  const data = heatmapByHourRanges(d, t);

  const containerWidth = container.clientWidth || 320;

  const {
    margin,
    width,
    height,
    outerWidth,
    outerHeight,
    x,
    y,
    color,
    isMobile,
  } = createHeatmapConfig(containerWidth, t);

  const min = d3.min(data, (d) => d.count) ?? 0;
  const max = d3.max(data, (d) => d.count) ?? 1;
  color.domain([min, max]);

  // SVG responsive real: viewBox + width 100%
  const svgRoot = d3
    .select(container)
    .append("svg")
    .attr("viewBox", `0 0 ${outerWidth} ${outerHeight}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .style("width", "100%")
    .style("height", "auto")
    .style("display", "block");
  const svg = svgRoot
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Title (más chico en mobile)
  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", -18)
    .attr("text-anchor", "middle")
    .style("fill", "white")
    .style("font-size", isMobile ? "13px" : "18px")
    .style("font-weight", "700")
    .text(t("heatMap.title"));

  // Axes con tickFormat en mobile
  const xAxis = svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(
      d3.axisBottom(x).tickFormat((t) => {
        // En desktop X son groups, en mobile X son vars
        if (!isMobile) return t;
        return t; // Mon/Tue...
      }),
    );

  const yAxis = svg.append("g").call(
    d3.axisLeft(y).tickFormat((t) => {
      // En mobile Y son groups: los acortamos
      if (isMobile) return groupShort[t] ?? t;
      return t; // Mon/Tue...
    }),
  );

  xAxis
    .selectAll("text")
    .style("fill", "white")
    .style("font-size", isMobile ? "10px" : "14px")
    .style("font-weight", "600")
    .attr("transform", `translate(0,3)`);

  yAxis
    .selectAll("text")
    .style("fill", "white")
    .style("font-size", isMobile ? "10px" : "14px")
    .style("font-weight", "600")
    .attr("transform", isMobile ? `translate(2,-8)` : `translate(5,-15)`)
    .style("rotate", isMobile ? "0deg" : "-45deg");

  xAxis.selectAll("path, line").style("stroke", "white");
  yAxis.selectAll("path, line").style("stroke", "white");

  // Axis titles
  const xTitle = isMobile ? t("heatMap.dayOfWeek") : t("heatMap.timeOfDay");
  const yTitle = isMobile ? t("heatMap.timeRange") : t("heatMap.dayOfWeek");

  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 8)
    .attr("text-anchor", "middle")
    .style("fill", "white")
    .style("font-size", isMobile ? "12px" : "16px")
    .style("font-weight", "600")
    .text(xTitle);

  svg
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 13)
    .attr("text-anchor", "middle")
    .style("fill", "white")
    .style("font-size", isMobile ? "12px" : "16px")
    .style("font-weight", "600")
    .text(yTitle);

  // Layers
  const cellsLayer = svg.append("g");
  const overlayLayer = svg.append("g");

  // Tooltip SVG
  const tooltip = overlayLayer
    .append("g")
    .style("display", "none")
    .style("pointer-events", "none");

  const tooltipBg = tooltip
    .append("rect")
    .attr("rx", 8)
    .attr("ry", 8)
    .attr("fill", "rgba(0,0,0,0.85)")
    .attr("stroke", "rgba(255,255,255,0.12)")
    .attr("stroke-width", 1);

  const t1 = tooltip
    .append("text")
    .attr("fill", "white")
    .style("font-size", "12px")
    .style("font-weight", "700");

  const t2 = tooltip
    .append("text")
    .attr("fill", "rgba(255,255,255,0.9)")
    .style("font-size", "12px")
    .style("font-weight", "600");

  const t3 = tooltip
    .append("text")
    .attr("fill", "rgba(255,255,255,0.7)")
    .style("font-size", "10.5px")
    .style("font-weight", "500");

  function showTooltip(event, d) {
    tooltip.raise();
    const [mx, my] = d3.pointer(event, svg.node());

    const line1 = `${d.variable} · ${d.group}`;
    const line2 = `${t("heatMap.tooltip1")} ${d.count.toFixed(2)}`;
    const line3 = t("heatMap.tooltip2");

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
  }

  function hideTooltip() {
    tooltip.style("display", "none");
  }

  // Cells (desktop normal, mobile transpuesto)
  cellsLayer
    .selectAll("rect.cell")
    .data(data, (d) => `${d.group}:${d.variable}`)
    .join("rect")
    .attr("class", "cell")
    .attr("x", (d) => x(isMobile ? d.variable : d.group))
    .attr("y", (d) => y(isMobile ? d.group : d.variable))
    .attr("width", x.bandwidth())
    .attr("height", y.bandwidth())
    .attr("fill", (d) => color(d.count))
    .on("mouseenter", function (event, d) {
      d3.select(this).attr("stroke", "white").attr("stroke-width", 2);
      showTooltip(event, d);
    })
    .on("mousemove", function (event, d) {
      showTooltip(event, d);
    })
    .on("mouseleave", function () {
      d3.select(this).attr("stroke", "none");
      hideTooltip();
    })
    .style("cursor", "pointer");
}
