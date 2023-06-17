import { BigSuccessButton, DangerButton } from "./composition";

export default function App() {
  return (
    <>
      <DangerButton text={"Fail"} />
      <BigSuccessButton text={"Success"} />
    </>
  );
}
