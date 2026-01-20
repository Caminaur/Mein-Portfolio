import { useEffect, useRef, useState } from "react";
import { drawHeatmap } from "./DrawHeatMap";
import { getHeatMapData } from "./getData";
import { useTranslation } from "react-i18next";

export const HeatMap = (props) => {
  const { data, updatedLabel, stale } = props;
  const containerRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (!containerRef.current || !data) return;

    drawHeatmap(containerRef.current, data, t);
  }, [t, data]);

  useEffect(() => {
    const onResize = () => {
      if (!containerRef.current || !data) return;

      drawHeatmap(containerRef.current, data, t);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [t, data]);

  return (
    <div className="bg-gray-900 flex justify-center pb-20 overflow-x-hidden">
      <div className="w-full max-w-[720px] flex flex-col gap-6">
        <div ref={containerRef} className="w-full" />
        <div className="px-3 w-auto">
          <div className="text-white bg-gray-400/50 p-8 rounded-md  inline-block px-3">
            <span>
              {t("heatMap.updated")} {updatedLabel}
            </span>
            {stale && <span> · {t("heatMap.stale")}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
