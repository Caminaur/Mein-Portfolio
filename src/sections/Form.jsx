import { validateEmail, validatePhone } from "../lib/utils";
import { useState } from "react";
import * as Toast from "@radix-ui/react-toast";
import { ToastMessage, ToastViewport } from "@/components/ToastMessage";
import { useTranslation } from "react-i18next";

export const FormSection = () => {
  const { t } = useTranslation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successToastOpen, setSuccessToastOpen] = useState(false);
  const [errorToastOpen, setErrorToastOpen] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleEmailBlur = (e) => {
    const value = e.target.value.trim();

    if (!value) {
      setErrors((prev) => ({ ...prev, email: t("contact.errors.required") }));
      return;
    }

    if (!validateEmail(value)) {
      setErrors((prev) => ({
        ...prev,
        email: t("contact.errors.invalidEmail"),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {
      company: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!form.company.trim()) newErrors.company = t("contact.errors.required");
    if (!form.email.trim()) newErrors.email = t("contact.errors.required");
    if (!form.phone.trim()) newErrors.phone = t("contact.errors.required");
    if (!form.message.trim()) newErrors.message = t("contact.errors.required");

    if (form.email && !validateEmail(form.email)) {
      newErrors.email = t("contact.errors.invalidEmail");
    }

    if (form.phone && !validatePhone(form.phone)) {
      newErrors.phone = t("contact.errors.invalidPhone");
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
    if (hasErrors) return;

    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();

      if (data.ok) {
        setSuccessToastOpen(true);
      } else {
        setErrorToastOpen(true);
      }
    } catch (err) {
      console.error(err);
      setErrorToastOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Toast.Provider swipeDirection="right">
      <div
        className="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8"
        id="contact"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
          />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="mt-2 text-lg/8 text-gray-400">
            {t("contact.subtitle")}
          </p>
        </div>

        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm/6 font-semibold text-white"
              >
                {t("contact.fields.company.label")}
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="form-input"
                  value={form.company}
                  onChange={handleChange}
                  placeholder={t("contact.fields.company.placeholder")}
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-white"
              >
                {t("contact.fields.email.label")}
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="form-input"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleEmailBlur}
                  placeholder={t("contact.fields.email.placeholder")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold text-white"
              >
                {t("contact.fields.phone.label")}
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                  <input
                    id="phone-number"
                    name="phone"
                    type="text"
                    placeholder={t("contact.fields.phone.placeholder")}
                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-3 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-white"
              >
                {t("contact.fields.message.label")}
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-input"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("contact.fields.message.placeholder")}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? t("contact.button.sending")
                : t("contact.button.submit")}
            </button>
          </div>
        </form>
      </div>

      <ToastMessage
        open={successToastOpen}
        onOpenChange={setSuccessToastOpen}
        title={t("contact.toast.success.title")}
        description={t("contact.toast.success.description")}
        variant="success"
      />

      <ToastMessage
        open={errorToastOpen}
        onOpenChange={setErrorToastOpen}
        title={t("contact.toast.error.title")}
        description={t("contact.toast.error.description")}
        variant="error"
      />

      <ToastViewport />
    </Toast.Provider>
  );
};
