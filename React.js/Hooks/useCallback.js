import { useCallback } from "react";
// useCallback(() => {}, []);

const useCallback = () => {
  useCallback(() => {
    func;
  }, [dependency]);

  return <div>useCallback</div>;
};
export default useCallback;
