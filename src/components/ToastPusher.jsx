import { Card } from "@/components/Card";
import { useToast } from "@/lib/toast/context";

const ERROR_TIMEOUT = 30000; // 30 seconds

export const ToastPusher = ({ children }) => {
  const toast = useToast();

  const onSuccessToast = () => {
    toast?.pushSuccess({
      title: "Success Toast Title",
      message: <p>Something Good happened</p>,
      lifetime: ERROR_TIMEOUT,
    });
  };
  const onErrorToast = () => {
    toast?.pushError({
      title: "Error Toast Title",
      message: <p>Something went wrong</p>,
      lifetime: ERROR_TIMEOUT,
    });
  };
  const onWarningToast = () => {
    toast?.pushWarning({
      title: "Warning Toast Title",
      message: <p>Wait for few seconds</p>,
      lifetime: ERROR_TIMEOUT,
    });
  };
  const onInfoToast = () => {
    toast?.pushInfo({
      title: "Info Toast Title",
      message: <p>You got a mail</p>,
      lifetime: ERROR_TIMEOUT,
    });
  };

  return (
    <Card>
      <h3 className="text-h3">Click to push toast</h3>

      <button
        type="button"
        className="flex items-center justify-center px-4 py-2 my-2 rounded-md shadow-toast text-sm font-medium text-4E7DD9 bg-white"
        onClick={onWarningToast}
      >
        Show Warning Toast
      </button>

      <button
        type="button"
        className="flex items-center justify-center px-4 py-2 my-2 rounded-md shadow-toast text-sm font-medium text-4E7DD9 bg-white"
        onClick={onInfoToast}
      >
        Show Info Toast
      </button>

      <button
        type="button"
        className="flex items-center justify-center px-4 py-2 my-2 rounded-md shadow-toast text-sm font-medium text-4E7DD9 bg-white"
        onClick={onErrorToast}
      >
        Show Error Toast
      </button>

      <button
        type="button"
        className="flex items-center justify-center px-4 py-2 my-2 rounded-md shadow-toast text-sm font-medium text-4E7DD9 bg-white"
        onClick={onSuccessToast}
      >
        Show Success Toast
      </button>
    </Card>
  );
};
