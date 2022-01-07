import "tailwindcss/tailwind.css";
import { ToastProvider } from "@/lib/toast/provider";

function MyApp({ Component, pageProps }) {
  const position = {
    variant: "top_right",
  };

  return (
    <ToastProvider variant={position.variant}>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
