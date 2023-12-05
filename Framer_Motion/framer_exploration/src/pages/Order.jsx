import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { containerVariants, childVariants } from "../animations";
import { useEffect } from "react";

export default function Order({ pizza, setShowModal }) {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="initial"
      animate="final"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
}

Order.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  pizza: PropTypes.shape({
    base: PropTypes.string,
    toppings: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
