import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";
export const Navbar = () => {
  const { t } = useTranslation();
  const navItems = [
    { name: t("navbar.home"), href: "#hero" },
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.projects"), href: "#projects" },
    { name: t("navbar.contact"), href: "#contact" },
  ];

  const handleCloseMobileMenu = () => {
    document.getElementById("dialog").removeAttribute("open");
  };
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-end lg:justify-center p-6 lg:px-8 "
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            command="show-modal"
            commandfor="mobile-menu"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200 fixed right-4 top-4"
          >
            <span className="sr-only">{t("navbar.openMenu")}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              data-slot="icon"
              aria-hidden="true"
              className="size-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-white"
            >
              {item.name}
            </a>
          ))}
          <LanguageSelector />
        </div>
      </nav>
      <el-dialog id="dialog">
        <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
          <div tabIndex="0" className="fixed inset-0 focus:outline-none">
            <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  command="close"
                  commandfor="mobile-menu"
                  className="-m-2.5 rounded-md p-2.5 text-gray-200"
                >
                  <span className="sr-only">{t("navbar.closeMenu")}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <path
                      d="M6 18 18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                        onClick={() => handleCloseMobileMenu()}
                      >
                        {item.name}
                      </a>
                    ))}
                    <LanguageSelector closeMenu={handleCloseMobileMenu} />
                  </div>
                </div>
              </div>
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>
    </header>
  );
};
