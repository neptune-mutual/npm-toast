import { useToast } from "@/lib/toast/context";

const ERROR_TIMEOUT = 30000; // 30 seconds

export const Card = ({ children }) => {
  const toast = useToast();

  const onShowToast = () => {
    toast?.pushError({
      title: "Error Toast Title",
      message: <p>Something went wrong</p>,
      lifetime: ERROR_TIMEOUT,
    });
  };

  return (
    <div className="mt-3 p-4 rounded-md shadow-md border max-w-md bg-indigo-600 text-white">
      {children}

      <button
        type="button"
        className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
        onClick={onShowToast}
      >
        Show Toast
      </button>
    </div>
  );
};
