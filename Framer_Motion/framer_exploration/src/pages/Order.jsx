import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { containerVariants, childVariants } from "../animations";

export default function Order({ pizza }) {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="initial"
      animate="final"
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
  pizza: PropTypes.shape({
    base: PropTypes.string,
    toppings: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
