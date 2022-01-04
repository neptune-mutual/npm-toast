import { Card } from "@/components/Card";
import useRenderCount from "../hooks/useRenderCount";

export const RenderCounter = () => {
  const count = useRenderCount();

  return (
    <Card>
      <h3 className="text-h3">Something else</h3>
    </Card>
  );
};
