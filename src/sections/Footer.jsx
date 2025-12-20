export const FooterSection = () => {
  return (
    <footer className=" border-t border-gray-800 bg-gray-900 py-8 text-center">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Caminaur. All rights reserved.
      </p>

      <div className="mt-4 flex justify-center space-x-6 flex-wrap px-4">
        <a
          href="https://github.com/Caminaur"
          target="_blank"
          className="text-gray-400 hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://www.frontendmentor.io/profile/Caminaur"
          target="_blank"
          className="text-gray-400 hover:text-white transition"
        >
          Frontend Mentor
        </a>
        <a
          href="https://exercism.org/profiles/Caminaur"
          target="_blank"
          className="text-gray-400 hover:text-white transition"
        >
          Exercism
        </a>

        <a
          href="https://cssbattle.dev/player/caminaur"
          target="_blank"
          className="text-gray-400 hover:text-white transition"
        >
          CSS Battles
        </a>
      </div>
    </footer>
  );
};
