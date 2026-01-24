import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { drawPieChart } from "./drawPieChart";

function PieChart(props) {
  const { data } = props;
  const containerRef = useRef();
  const { t } = useTranslation();

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (!containerRef || !data) {
      return;
    }

    drawPieChart(containerRef.current, data, t, width, height);
  }, [data, height, width]);

  return (
    <div className="flex flex-col items-center">
      <div ref={containerRef}></div>
    </div>
  );
}

export default PieChart;
