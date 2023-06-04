import PropTypes from "prop-types";

const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <div key={i}>
          <h3>{i + 1}</h3>
          <ItemComponent {...{ [resourceName]: item }} />
        </div>
      ))}
    </>
  );
};

NumberedList.propTypes = {
  items: PropTypes.array,
  resourceName: PropTypes.string,
  itemComponent: PropTypes.func,
};

export default NumberedList;
