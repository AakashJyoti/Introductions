import { Link } from "react-router-dom";
import { toppings } from "../constants";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { containerVariants } from "../animations";

export default function Toppings({ addTopping, pizza }) {
  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="initial"
      animate="final"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{
                scale: 1.1,
                color: "#F8e112",
                originX: 0,
              }}
              transition={{
                type: "tween",
                duration: 0.1,
              }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
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
