import PropTypes from "prop-types";

const SmallPersonListitem = ({ person }) => {
  const { name, age } = person;
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};

SmallPersonListitem.propTypes = {
  person: PropTypes.object,
};

export default SmallPersonListitem;
