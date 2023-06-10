import PropTypes from "prop-types";
import React from "react";

export default function ControlledOnboarding({
  children,
  onFinish,
  currentIndex,
  onNext,
}) {
  const childrenArray = React.Children.toArray(children);
  const currentChild = childrenArray[currentIndex];

  const goToNext = (stepData) => {
    if (childrenArray.length === currentIndex + 1) {
      onFinish(stepData);
    } else {
      onNext(stepData);
    }
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
}

ControlledOnboarding.propTypes = {
  children: PropTypes.array,
  onFinish: PropTypes.func,
  currentIndex: PropTypes.number,
  onNext: PropTypes.func,
};
