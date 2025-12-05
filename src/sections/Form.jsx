import { validateEmail, validatePhone } from "../lib/utils";
import { useState } from "react";
import * as Toast from "@radix-ui/react-toast";
import { ToastMessage, ToastViewport } from "@/components/ToastMessage";

export const FormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successToastOpen, setSuccessToastOpen] = useState(false);
  const [errorToastOpen, setErrorToastOpen] = useState(false);

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
      setErrors((prev) => ({ ...prev, email: "Required field" }));
      return;
    }

    if (!validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email" }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {
      company: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!form.company.trim()) newErrors.company = "Required field";
    if (!form.email.trim()) newErrors.email = "Required field";
    if (!form.phone.trim()) newErrors.phone = "Required field";
    if (!form.message.trim()) newErrors.message = "Required field";

    if (form.email && !validateEmail(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (form.phone && !validatePhone(form.phone)) {
      newErrors.phone = "Only numbers (min 6 digits)";
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
    if (hasErrors) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      // success
      setSuccessToastOpen(true);

      //error
      // setErrorToastOpen(true);
    }, 3000);
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
            Contact Form
          </h2>
          <p className="mt-2 text-lg/8 text-gray-400">
            Feel free to reach out and ask me anything about my work.
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
                Name / Company
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
                Contact Email
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
                Phone number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                  <input
                    id="phone-number"
                    name="phone"
                    type="text"
                    placeholder="0175 3144 1445"
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
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-input"
                  value={form.message}
                  onChange={handleChange}
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
              {isSubmitting ? "Sending..." : "Let's talk"}
            </button>
          </div>
        </form>
      </div>
      <ToastMessage
        open={successToastOpen}
        onOpenChange={setSuccessToastOpen}
        title="Message received ✅"
        description="Thanks for reaching out, I'll get back to you soon."
        variant="success"
      />

      <ToastMessage
        open={errorToastOpen}
        onOpenChange={setErrorToastOpen}
        title="Something went wrong ❌"
        description="Please try again later."
        variant="error"
      />

      <ToastViewport />
    </Toast.Provider>
  );
};
