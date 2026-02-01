import React, { useEffect, useRef } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { useTranslation } from "react-i18next";
import { drawMap } from "./drawMap";

function Map(props) {
  const { geoJson } = props;
  const containerRef = useRef();
  const { t } = useTranslation();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (!containerRef || !geoJson) {
      return;
    }

    drawMap(containerRef.current, geoJson, t, width, height);
  }, [geoJson, width, height]);

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-4xl text-white ">Mapa</h2>
      <div
        className="w-[300px] h-[600px]
        sm:w-[600px] sm:h-[450px]
        lg:w-[900px] lg:h-[500px]
        border-2 border-blue-300"
        ref={containerRef}
      ></div>
    </div>
  );
}

export default Map;
