import PropTypes from "prop-types";

export const partiallyApply = (Component, partialProps) => {
  const PartiallyAppliedComponent = (props) => (
    <Component {...partialProps} {...props} />
  );

  return PartiallyAppliedComponent;
};

export const Button = ({ size, color, text, ...props }) => (
  <button
    style={{
      backgroundColor: color,
      padding: size === "large" ? "32px" : "8px",
      fontSize: size === "large" ? "32px" : "16px",
    }}
    {...props}
  >
    {text}
  </button>
);

export const DangerButton = partiallyApply(Button, { color: "red" });
export const BigSuccessButton = partiallyApply(Button, {
  color: "green",
  size: "large",
});

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};
