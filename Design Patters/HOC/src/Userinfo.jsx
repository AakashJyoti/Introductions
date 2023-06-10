import PropTypes from "prop-types";

export default function UserInfo({ user }) {
  const { name, age, hairColor, hobbies } = user || {};
  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <h4>Hobbies: </h4>
      <ul>
        {hobbies?.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
}

UserInfo.propTypes = {
  user: PropTypes.object,
};
