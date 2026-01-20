import { useTranslation } from "react-i18next";
import { HeatMap } from "./Graphs/HeatMap-1/HeatMap";
import LineChart from "./Graphs/LineChart/LineChart";
import { BarChart } from "./Graphs/BarChart/BarChart";
import { useEffect, useState } from "react";
import { getGraphsData } from "./Graphs/getData/getData";

export const EngineeringHabits = ({ projects }) => {
  const [updatedLabel, setupdatedLabel] = useState("Unknown");
  const [stale, setStale] = useState("Unknown");
  const [barChartData, setBarChartData] = useState(null);
  const [heatMapData, setHeatMapData] = useState(null);

  const { t } = useTranslation();

  useEffect(() => {
    const init = async () => {
      const { heatMap, barChart, updatedLabel, stale } = await getGraphsData(t);
      setHeatMapData(heatMap);
      setBarChartData(barChart);
      setupdatedLabel(updatedLabel);
      setStale(stale);
    };

    init();
  }, [t]);

  return (
    <section className="sm:px-6 lg:px-8 bg-gray-900 lg:pt-40" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            {t("EngineeringHabits")}
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-blue-800"></div>
        </div>
        <HeatMap data={heatMapData} stale={stale} updatedLabel={updatedLabel} />
        <BarChart data={barChartData} />
      </div>
    </section>
  );
};
