export const prepareContainer = (container, w, h) => {
  const margin = { left: 60, right: 20, top: 60, bottom: 70 };
  const width = w - margin.left - margin.right;
  const height = h - margin.top - margin.bottom;

  return {
    svg: container
      .append("svg")
      .attr("height", h)
      .attr("width", w)
      .append("g")
      .attr("transform", `translate(${w / 2},${h / 2})`), // para que el grupo se coloque correctamente en la imagen. Es decir aplicamos el margen al contenido
    height,
    width,
  };
};
