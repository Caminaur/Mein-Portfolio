import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const solveTechColor = (techName) => {
  const colorMap = {
    HTML: "bg-orange-600",
    CSS: "bg-blue-600",
    JavaScript: "bg-yellow-500",
    TypeScript: "bg-sky-600",
    React: "bg-cyan-500",
    Tailwind: "bg-emerald-500",
    Responsive: "bg-emerald-600",
    Grid: "bg-indigo-600",
    "React-router-dom": "bg-pink-600",
  };

  return clsx(
    "rounded-full px-3 py-1 text-xs font-semibold text-white",
    colorMap[techName] || "bg-gray-600"
  );
};

export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export const validatePhone = (phone) => {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 6;
};
