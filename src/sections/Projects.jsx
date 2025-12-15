import { useEffect, useRef, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { useTranslation } from "react-i18next";

export const ProjectSection = ({ projects }) => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const extraRef = useRef(null);

  const firstSix = projects.slice(0, 6);
  const extraProjects = projects.slice(6);

  useEffect(() => {
    if (!extraRef.current) return;

    if (expanded) {
      const fullHeight = extraRef.current.scrollHeight;
      setMaxHeight(fullHeight);
    } else {
      setMaxHeight(0);
    }
  }, [expanded, projects.length]);

  return (
    <section
      className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-900 lg:pt-40"
      id="projects"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            {t("projects.title")}
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-blue-800"></div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {firstSix.map((p, index) => (
            <ProjectCard key={`${p.name}-${index}`} project={p} />
          ))}
        </div>
        {extraProjects.length > 0 && (
          <div
            style={{
              maxHeight: maxHeight,
              overflow: "hidden",
              transition: "max-height 0.4s ease",
            }}
            className="mt-10"
          >
            <div
              ref={extraRef}
              className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
            >
              {extraProjects.map((p, index) => (
                <ProjectCard key={`${p.name}-extra-${index}`} project={p} />
              ))}
            </div>
          </div>
        )}
        {extraProjects.length > 0 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="inline-flex items-center rounded-full border border-blue-600 px-8 py-3 
                         text-base font-medium text-blue-600 transition-colors duration-300 
                         hover:bg-blue-600 hover:text-white"
            >
              {expanded ? t("projects.showLess") : t("projects.showMore")}
              <span
                className={`ml-2 inline-block transform transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div className="mt-16 text-center">
              <a
                href="https://www.frontendmentor.io/profile/Caminaur/solutions"
                className="inline-flex items-center rounded-full border border-blue-600 px-8 py-3 text-base font-medium text-blue-600 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
              >
                {t("projects.allFrontendMentor")}
                <i className="fas fa-long-arrow-alt-right ml-3"></i>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
