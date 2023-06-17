import PropTypes from "prop-types";

const isObject = (x) => typeof x === "object" && x != null;

export default function RecursiveComponent({ data }) {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data); // returns a array of all of the key and value pairs
  return (
    <>
      {pairs.map(([key, value]) => (
        <li key={key}>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  );
}

RecursiveComponent.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]),
};
