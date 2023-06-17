import PropTypes from "prop-types";

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

export const DangerButton = ({ ...props }) => (
  <Button {...props} color={"red"} />
);

export const BigSuccessButton = ({ ...props }) => (
  <Button {...props} color={"green"} size={"large"} />
);

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};
