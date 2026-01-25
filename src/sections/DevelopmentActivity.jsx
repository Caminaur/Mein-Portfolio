import { useTranslation } from "react-i18next";
import { HeatMap } from "../components/Graphs/HeatMap-1/HeatMap";
import { BarChart } from "../components/Graphs/BarChart/BarChart";
import { useEffect, useState } from "react";
import { getGraphsData } from "../components/Graphs/getData/getData";
import PieChart from "../components/Graphs/PieChart/PieChart";

export const DevelopmentActivity = () => {
  const [updatedLabel, setupdatedLabel] = useState("Unknown");
  const [stale, setStale] = useState("Unknown");
  const [barChartData, setBarChartData] = useState(null);
  const [heatMapData, setHeatMapData] = useState(null);
  const [chartType, setChartType] = useState("bar");

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
            {t("DevelopmentActivity.title")}
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-blue-800"></div>
        </div>
        <div className="flex items-center flex-col">
          <h2 className="mb-6 text-3xl tracking-tight w-[40ch] max-w-full px-2 text-center text-white sm:text-xl md:text-2xl">
            {t("DevelopmentActivity.description")}
          </h2>
          <div className="px-3 w-auto ">
            <div className="text-white bg-gray-400/50 p-4 rounded-md  inline-block px-3">
              <span>
                {t("metrics.heatMap.updated")} {updatedLabel}
              </span>
              {stale && <span> · {t("metrics.heatMap.stale")}</span>}
            </div>
          </div>
        </div>
        <HeatMap data={heatMapData} stale={stale} updatedLabel={updatedLabel} />

        <div className="flex items-center justify-center gap-4 text-white pb-10 text-xl">
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center cursor-pointer"
              htmlFor="bar"
            >
              <input
                name="framework"
                type="radio"
                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                id="bar"
                checked={chartType === "bar"}
                onChange={() => setChartType("bar")}
              />
              <span className="absolute bg-slate-300 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
            </label>
            <label
              className="ml-2 text-white cursor-pointer text-md sm:text-3xl"
              htmlFor="bar"
            >
              Bar Chart
            </label>
          </div>

          <div className="inline-flex items-center">
            <label
              className="relative flex items-center cursor-pointer"
              htmlFor="react"
            >
              <input
                name="framework"
                type="radio"
                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                id="react"
                checked={chartType === "pie"}
                onChange={() => setChartType("pie")}
              />
              <span className="absolute bg-slate-300 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
            </label>
            <label
              className="ml-2 text-white cursor-pointer text-md sm:text-3xl"
              htmlFor="react"
            >
              Pie Chart
            </label>
          </div>
        </div>
        {chartType === "bar" && barChartData && (
          <BarChart data={barChartData} />
        )}

        {chartType === "pie" && barChartData && (
          <PieChart data={barChartData} />
        )}
      </div>
    </section>
  );
};
