import PropTypes from "prop-types";
import { useState } from "react";
import ControlledForm from "./ControlledForm";
import ControlledModal from "./ControlledModal";
import UncontrolledExp from "./UncontrolledExp";
import UncontrolledForm from "./UncontrolledForm";
import UncontrolledModal from "./UncontrolledModal";
import UnControlledOnboarding from "./UnControlledOnboarding";
import ControlledOnboarding from "./ControlledOnboarding";

const StepOne = ({ goToNext }) => {
  const [name, setName] = useState("");
  return (
    <>
      <h1>Enter Your Name</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => goToNext({ name })}>Next</button>
    </>
  );
};

const StepTwo = ({ goToNext }) => {
  const [age, setAge] = useState("");
  return (
    <>
      <h1>Enter Your Age</h1>
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={() => goToNext({ age })}>Next</button>
    </>
  );
};

const StepThree = ({ goToNext }) => {
  return (
    <>
      <h1>Enter Your Email</h1>
      <h3>Congratulations! You are qualified for our discount</h3>
      <button onClick={() => goToNext({})}>Next</button>
    </>
  );
};

const StepFour = ({ goToNext }) => {
  const [email, setEmail] = useState("");
  return (
    <>
      <h1>Enter Your Email</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => goToNext({ email })}>Next</button>
    </>
  );
};

export default function App() {
  const [shouldShow, setShouldShow] = useState(false);
  const toggleModal = () => setShouldShow((prev) => !prev);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [onBoardingData, setOnBoardingData] = useState({});

  const onFinish = (stepData) => {
    setOnBoardingData((prev) => ({ ...prev, ...stepData }));
    alert("Onboarding Complete");
    consoleData();
  };

  const onNext = (stepData) => {
    setOnBoardingData((prev) => ({ ...prev, ...stepData }));
    setCurrentIndex((prev) => prev + 1);
  };

  const consoleData = () => console.log(onBoardingData);

  // const goToNext = (stepData) => {
  //   const nextIndex = currentIndex + 1;
  //   const updatedData = { ...onBoardingData, ...stepData };

  //   if (nextIndex < children.length) {
  //     setCurrentIndex(nextIndex);
  //   } else {
  //     onFinish(updatedData);
  //   }
  //   setOnBoardingData(updatedData);
  // };

  return (
    <>
      <h1>Hello there</h1>
      {/* <UncontrolledForm /> */}
      {/* <UncontrolledExp /> */}
      {/* <ControlledForm /> */}
      {/* <UncontrolledModal>
        <h1>Uncontrolled Modal</h1>
      </UncontrolledModal> */}

      {/* <button onClick={toggleModal}>Open Controlled Modal</button>
      <ControlledModal shouldShow={shouldShow} onRequestClose={toggleModal}>
        <h1>Controlled Modal</h1>
      </ControlledModal> */}

      <h1>Onboarding Component</h1>
      <ControlledOnboarding
        onFinish={onFinish}
        currentIndex={currentIndex}
        onNext={onNext}
      >
        <StepOne />
        <StepTwo />
        {onBoardingData.age >= 60 && <StepThree />}
        <StepFour />
      </ControlledOnboarding>
    </>
  );
}

StepOne.propTypes = {
  goToNext: PropTypes.func,
};

StepTwo.propTypes = {
  goToNext: PropTypes.func,
};

StepThree.propTypes = {
  goToNext: PropTypes.func,
};

StepFour.propTypes = {
  goToNext: PropTypes.func,
};
