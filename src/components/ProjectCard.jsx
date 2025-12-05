import { solveTechColor } from "../lib/utils";

export const ProjectCard = (props) => {
  const { project } = props;

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer bg-gray-800">
      <div className="h-64 overflow-hidden ">
        <img
          src={project.images[0]}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-30"
        />
      </div>
      <div className="absolute inset-0 flex items-end bg-linear-to-t from-gray-900 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
        <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="mt-2 text-gray-300">{project.description}</p>
          <div className="mt-4 flex space-x-2">
            {project.techStack.map((tech) => {
              return (
                <span
                  key={`${project.title} ${tech}`}
                  className={solveTechColor(tech)}
                >
                  {tech}
                </span>
              );
            })}
          </div>
          <a
            href={project.url}
            className="mt-4 inline-flex items-center text-white transition-colors hover:text-blue-300"
          >
            Link to live website
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
      <div className="lg:hidden flex flex-col p-4">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-gray-300">{project.description}</p>
        <div className="mt-4 flex space-x-2">
          {project.techStack.map((tech) => {
            return (
              <span
                key={`${project.title} ${tech}`}
                className={solveTechColor(tech)}
              >
                {tech}
              </span>
            );
          })}
        </div>
        <a
          href={project.url}
          className="mt-4 text-white transition-colors hover:text-blue-300 p-4 bg-blue-800 rounded-2xl w-fit"
        >
          Link to Challenge
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  );
};
