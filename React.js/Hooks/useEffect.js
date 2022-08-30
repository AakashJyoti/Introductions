import { useEffect } from "react";

const useEffect = () => {
  useEffect(() => {
    appliedFunction;

    return () => {
      clearUpFunction;
    };
  }, [depencency]);
  // no dependency make renders every time state shanges
  // emptly dependency make rerender only onetime
  // with defined dependency it will rerender with defined state change only

  return <div>useEffect</div>;
};
export default useEffect;
