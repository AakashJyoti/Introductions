import { Link } from "react-router-dom";
import { toppings } from "../constants";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { buttonVariants, containerVariants, listVariants } from "../animations";

export default function Toppings({ addTopping, pizza }) {
  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="initial"
      animate="final"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              variants={listVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
}

Toppings.propTypes = {
  addTopping: PropTypes.func.isRequired,
  pizza: PropTypes.shape({
    toppings: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
