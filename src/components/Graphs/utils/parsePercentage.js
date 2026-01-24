export const parsePercentage = (number) => {
  const num = new Intl.NumberFormat("es-ES", {
    maximumFractionDigits: 1,
  }).format(number);

  return `${num} %`;
};
