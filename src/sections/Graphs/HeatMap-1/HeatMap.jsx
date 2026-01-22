import { useEffect, useRef } from "react";
import { drawHeatmap } from "./DrawHeatMap";
import { useTranslation } from "react-i18next";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

export const HeatMap = (props) => {
  const { data } = props;
  const containerRef = useRef(null);
  const { t } = useTranslation();

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (!containerRef.current || !data) return;

    drawHeatmap(containerRef.current, data, t, width, height);
  }, [t, data, width]);

  return (
    <div className="bg-gray-900 flex justify-center pb-20 overflow-x-hidden">
      <div className="w-full max-w-[720px] flex flex-col gap-6 ">
        <div
          ref={containerRef}
          className="w-full justify-center items-center flex"
        />
      </div>
    </div>
  );
};
