import { useTranslation } from "react-i18next";
import { HeatMap } from "./Graphs/HeatMap-1/HeatMap";

export const EngineeringHabits = ({ projects }) => {
  const { t } = useTranslation();

  return (
    <section className="sm:px-6 lg:px-8 bg-gray-900 lg:pt-40" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            {t("EngineeringHabits")}
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-blue-800"></div>
        </div>
        <HeatMap />
      </div>
    </section>
  );
};
