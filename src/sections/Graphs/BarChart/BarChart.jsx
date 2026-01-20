import { useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import { getBarChartData } from "../HeatMap-1/getData";
import { drawBarChart } from "./drawBarChart";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
export const BarChart = function (props) {
  const { data } = props;
  const containerRef = useRef();
  const { t } = useTranslation();

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (!containerRef.current || !data) return;

    drawBarChart(containerRef.current, data, t, width, height);
  }, [data, width, height]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-6">
        <div ref={containerRef} className="" />
      </div>
    </div>
  );
};
