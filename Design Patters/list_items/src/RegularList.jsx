import PropTypes from "prop-types";

const RegularList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};

RegularList.propTypes = {
  items: PropTypes.array,
  resourceName: PropTypes.string,
  itemComponent: PropTypes.func,
};

export default RegularList;
