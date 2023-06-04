import SplitScreen from "./SplitScreen";

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: "azure" }}>Left</h1>;
};

const RightHandComponent = () => {
  return <p style={{ backgroundColor: "skyblue" }}>Right</p>;
};

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent />
        <RightHandComponent />
      </SplitScreen>
    </>
  );
}

export default App;
