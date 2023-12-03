import { Link } from "react-router-dom";
import { toppings } from "../constants";
import PropTypes from "prop-types";

export default function Toppings({ addTopping, pizza }) {
  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>

      <Link to="/order">
        <button>Order</button>
      </Link>
    </div>
  );
}

Toppings.propTypes = {
  addTopping: PropTypes.func.isRequired,
  pizza: PropTypes.shape({
    toppings: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
