export const prepareContainer = (container, w, h) => {
  const margin = { left: 60, right: 0, top: 40, bottom: 70 };
  const width = w - margin.left - margin.right;
  const height = h - margin.top - margin.bottom;
  return {
    svg: container
      .append("svg")
      .attr("height", height + margin.top + margin.bottom)
      .attr("width", width + margin.left + margin.right)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`) // para que el grupo se coloque correctamente en la imagen. Es decir aplicamos el margen al contenido
      .attr("overflow", "hidden"),
    width: width,
    height: height,
  };
};
