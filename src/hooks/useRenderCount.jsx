import { useRef, useEffect } from "react";

export default function useRenderCount() {
  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current += 1;
  });
  return renderCount.current;
}
