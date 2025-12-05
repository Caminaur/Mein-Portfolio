import clsx from "clsx";
import { ProjectCard } from "../components/ProjectCard";

export const ProjectSection = (props) => {
  const { projects } = props;

  return (
    <section
      className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-900 lg:pt-40"
      id="projects"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            My Projects
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-blue-800"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => (
            <ProjectCard key={`${p.name} ${index}`} project={p} />
          ))}
        </div>

        {/* View More Button  */}
        <div className="mt-16 text-center">
          <a
            href="https://www.frontendmentor.io/profile/Caminaur/solutions"
            className="inline-flex items-center rounded-full border border-blue-600 px-8 py-3 text-base font-medium text-blue-600 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
          >
            Explore All Projects
            <i className="fas fa-long-arrow-alt-right ml-3"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
