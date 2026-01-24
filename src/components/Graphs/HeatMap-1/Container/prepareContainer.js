export const prepareContainer = (container, w, h) => {
  const margin = { top: 65, right: 15, bottom: 65, left: 35 };
  const width = w - margin.left - margin.right;
  const height = h - margin.top - margin.bottom;

  const groups = ["0–3", "4–7", "8–11", "12–15", "16–19", "20–23"];

  return {
    svg: container
      .append("svg")
      .attr("height", height + margin.top + margin.bottom)
      .attr("width", width + margin.left + margin.right)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .attr("overflow", "hidden"),
    width: width,
    height: height,
    groups,
  };
};
