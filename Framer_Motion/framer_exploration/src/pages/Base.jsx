import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { bases } from "../constants";

export default function Base({ addBase, pizza }) {
  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
}

Base.propTypes = {
  addBase: PropTypes.func.isRequired,
  pizza: PropTypes.shape({
    base: PropTypes.string,
  }).isRequired,
};
