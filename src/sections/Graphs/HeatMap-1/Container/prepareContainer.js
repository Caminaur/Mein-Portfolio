export const prepareContainer = (container, w, h) => {
  const margin = { top: 65, right: 25, bottom: 65, left: 30 };
  const width = w - margin.left - margin.right;
  const height = h - margin.top - margin.bottom;

  const groups = [
    "0:00–3:00",
    "4:00–7:00",
    "8:00–11:00",
    "12:00–15:00",
    "16:00–19:00",
    "20:00–23:00",
  ];

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
