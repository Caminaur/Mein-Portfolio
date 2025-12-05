import * as Toast from "@radix-ui/react-toast";

export const ToastMessage = ({
  open,
  onOpenChange,
  title,
  description,
  variant = "success",
}) => {
  const baseStyles = `
    fixed top-4 right-4 w-full max-w-xs rounded-md shadow-lg p-4
    opacity-0 transition-opacity duration-300 ease-out
    data-[state=open]:opacity-100 data-[state=closed]:opacity-0
  `;

  const variants = {
    success: "bg-gray-900 text-white border border-emerald-500/60",
    error: "bg-red-900 text-white border border-red-500/70",
  };

  return (
    <Toast.Root
      open={open}
      onOpenChange={onOpenChange}
      duration={4000}
      className={`${baseStyles} ${variants[variant]}`}
    >
      <Toast.Title className="text-sm font-semibold">{title}</Toast.Title>
      <Toast.Description className="mt-1 text-sm opacity-80">
        {description}
      </Toast.Description>
    </Toast.Root>
  );
};

export const ToastViewport = () => (
  <Toast.Viewport className="fixed top-0 right-0 flex flex-col gap-2 p-4 outline-none" />
);
