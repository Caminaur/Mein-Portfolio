export const AboutMeSection = () => {
  return (
    <div id="about" className="relative bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-3xl tracking-tight font-extrabold text-white sm:text-3xl md:text-4xl">
                About me
              </h2>

              <div className="text-white text-lg">
                <p>
                  I’m a full-stack web developer with experience in building
                  clean, efficient, and reliable digital solutions. Over the
                  years, I’ve worked in different environments, technical teams,
                  customer-oriented roles, and fast-paced workplaces which
                  helped me develop strong problem-solving skills, adaptability,
                  and clear communication.
                </p>
                <p>
                  I enjoy learning new technologies and improving my craft
                  through personal projects, challenges, and continuous
                  education. My focus is on writing organized code,
                  understanding the needs behind each task, and delivering
                  solutions that work smoothly in real-world use cases.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="./about-me.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
