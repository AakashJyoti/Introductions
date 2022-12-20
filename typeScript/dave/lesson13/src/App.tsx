import Counter from "./components/Counter";
import MainHooks from "./components/MainHooks";

const App = () => {
  return (
    <>
      {/* <MainHooks /> */}
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </>
  );
};
export default App;
