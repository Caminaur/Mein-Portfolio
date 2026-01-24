import { useRef } from "react";
import {
  axisBottom,
  axisLeft,
  extent,
  line,
  max,
  scaleLinear,
  scaleTime,
  select,
  timeFormat,
  timeMonth,
} from "d3";
function LineChart() {
  const containerRef = useRef(null);

  const margin = { top: 70, right: 30, bottom: 40, left: 100 };
  const width = 1000 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  const x = scaleTime().range([0, width]);
  const y = scaleLinear().range([height, 0]);

  const container = select(containerRef.current); // selector
  container.selectAll("*").remove();

  const svg = container
    .append("svg")
    .attr("width", width + margin.left + margin.right) // le agregamos los margenes para que la SVG abarque todo incluyendo el margin
    .attr("height", height + margin.top + margin.bottom)
    .append("g") // Group Element
    .attr("transform", `translate(${margin.left},${margin.top})`); // para que el grupo se coloque correctamente en la imagen. Es decir aplicamos el margen al contenido

  // Create a fake dataset

  const dataset = [
    { date: new Date("2022-01-01"), value: 200 },
    { date: new Date("2022-02-01"), value: 250 },
    { date: new Date("2022-03-01"), value: 180 },
    { date: new Date("2022-04-01"), value: 300 },
    { date: new Date("2022-05-01"), value: 280 },
    { date: new Date("2022-06-01"), value: 220 },
    { date: new Date("2022-07-01"), value: 300 },
    { date: new Date("2022-08-01"), value: 450 },
    { date: new Date("2022-09-01"), value: 280 },
    { date: new Date("2022-10-01"), value: 600 },
    { date: new Date("2022-11-01"), value: 780 },
    { date: new Date("2022-12-01"), value: 320 },
  ];

  // Define the x and y domains

  x.domain(extent(dataset, (d) => d.date)); // a lo largo
  y.domain([0, max(dataset, (d) => d.value)]); // busca el valor maximo

  // Add the x-axis

  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(
      axisBottom(x).ticks(timeMonth.every(1)).tickFormat(timeFormat("%b %Y"))
    );

  // Add the y-axis

  svg.append("g").call(axisLeft(y));

  // Create the line generator

  const line2 = line()
    .x((d) => x(d.date))
    .y((d) => y(d.value));

  // Add the line path to the SVG element

  svg
    .append("path")
    .datum(dataset)
    .attr("fill", "none")
    .attr("stroke", "purple")
    .attr("stroke-width", 3)
    .attr("d", line2);

  return (
    <div className="bg-gray-200 flex justify-center">
      <div className="flex flex-col gap-6">
        <div ref={containerRef} className="" />
      </div>
    </div>
  );
}

export default LineChart;
