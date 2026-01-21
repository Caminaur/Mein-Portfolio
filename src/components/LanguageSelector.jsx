import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export function LanguageSelector({ closeMenu }) {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage || i18n.language;

  const handleLanguageSelection = (lang) => {
    i18n.changeLanguage(lang);
    closeMenu?.();
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
      {LANGUAGES.map((lang) => {
        const isActive = current === lang.code;

        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => handleLanguageSelection(lang.code)}
            className={`rounded-full px-3 py-1 text-sm font-semibold transition cursor-pointer ${
              isActive
                ? "bg-white/10 text-white"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
