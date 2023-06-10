import PropTypes from "prop-types";
import React, { useState } from "react";

export default function UnControlledOnboarding({ children, onFinish }) {
  const [onBoardingData, setOnBoardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;
    const updatedData = { ...onBoardingData, ...stepData };

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }
    setOnBoardingData(updatedData);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
}

UnControlledOnboarding.propTypes = {
  children: PropTypes.array,
  onFinish: PropTypes.func,
};
