import { useEffect, useRef, useState } from "react";
import { drawHeatmap } from "./DrawHeatMap";
import { getData } from "./getData";
import { useTranslation } from "react-i18next";

export const HeatMap = () => {
  const containerRef = useRef(null);
  const [updateLabel, setupdateLabel] = useState("Unknown");
  const [stale, setStale] = useState("Unknown");
  const { t } = useTranslation();

  useEffect(() => {
    let dataCache = null;
    let rafId = null;

    const render = () => {
      if (!containerRef.current || !dataCache) return;
      drawHeatmap(containerRef.current, dataCache, t);
    };

    const init = async () => {
      const [data, updatedLabel, stale] = await getData(t);
      dataCache = data;

      setupdateLabel(updatedLabel);
      setStale(stale);
      render();
    };

    const onResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(render);
    };

    init();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, [t]);

  return (
    <div className="bg-gray-900 flex justify-center pb-20 overflow-x-hidden">
      <div className="w-full max-w-[720px] flex flex-col gap-6">
        <div ref={containerRef} className="w-full" />
        <div className="px-3 w-auto">
          <div className="text-white bg-gray-400/50 p-8 rounded-md  inline-block px-3">
            <span>
              {t("heatMap.updated")} {updateLabel}
            </span>
            {stale && <span> · {t("heatMap.stale")}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
