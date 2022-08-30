import { useLayoutEffect } from "react";
// It runs synchronously after a render but before the screen is updated

const useLayoutEffect = () => {
  useLayoutEffect(() => {
    appliedFunction;

    return () => {
      clearUpFunction;
    };
  }, [dependency]);
  
  return <div>useLayoutEffect</div>;
};
export default useLayoutEffect;
