import PropTypes from "prop-types";

const SmallProductListItem = ({ product }) => {
  const { name, price } = product;

  return (
    <h3>
      {name} - {price}
    </h3>
  );
};

SmallProductListItem.propTypes = {
  product: PropTypes.object,
};

export default SmallProductListItem;
