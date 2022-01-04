import useRenderCount from "src/hooks/useRenderCount";

export const Card = ({ children }) => {
  const count = useRenderCount();

  return (
    <div className="mt-3 p-4 rounded-md shadow-toast border max-w-md bg-4E7DD9 text-white">
      {children}

      <br />

      <p className="mt-2 text-sm">Render count: {count}</p>
    </div>
  );
};
