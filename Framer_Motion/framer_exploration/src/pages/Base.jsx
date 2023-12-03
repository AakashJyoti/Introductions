import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { bases } from "../constants";
import {
  buttonVariants,
  containerVariants,
  listVariants,
  nextVariants,
} from "../animations";

export default function Base({ addBase, pizza }) {
  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="initial"
      animate="final"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              variants={listVariants}
              whileHover="hover"
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={nextVariants}>
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}

Base.propTypes = {
  addBase: PropTypes.func.isRequired,
  pizza: PropTypes.shape({
    base: PropTypes.string,
  }).isRequired,
};
