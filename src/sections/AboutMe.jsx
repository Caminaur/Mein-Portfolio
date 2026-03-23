import { useTranslation } from "react-i18next";

export const AboutMeSection = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="relative bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 xl:max-w-2xl xl:w-full xl:pb-28 2xl:pb-32">
          <svg
            className="hidden xl:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="relative z-20 mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 xl:mt-20 xl:px-8 2xl:mt-28">
            <div className="sm:text-center xl:text-left">
              <h2 className="my-6 text-3xl tracking-tight font-extrabold text-white sm:text-3xl md:text-4xl">
                {t("about.title")}
              </h2>

              <div className="text-white text-lg">
                <p>{t("about.paragraph1")}</p>
                <p>{t("about.paragraph2")}</p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="relative p-4 xl:p-0 md:max-w-lg md:mx-auto xl:max-w-none xl:mx-0 xl:absolute xl:inset-y-0 xl:right-0 xl:w-1/2">
        {/* glow */}
        <div className="absolute inset-4 bg-indigo-600/20 rounded-3xl blur-2xl xl:hidden" />
        {/* offset accent border */}
        <div className="absolute inset-4 border border-indigo-400/40 rounded-2xl translate-x-3 translate-y-3 xl:hidden" />
        <img
          className="relative h-auto w-full object-cover object-top md:h-auto xl:w-full xl:h-full rounded-2xl xl:rounded-none shadow-lg"
          src="./about-me.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
