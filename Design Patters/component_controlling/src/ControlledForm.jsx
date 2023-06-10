import { useEffect, useState } from "react";

export default function ControlledForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [inputError, setInputError] = useState("");
  const [ageError, setAgeError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3) {
      console.log("Name must be 3 or more characters");
      return;
    }
    if (age.length >= 3) {
      console.log("Age must be in 2 characters");
      return;
    }
    console.log({ name, age, email });

    setName("");
    setAge("");
    setEmail("");
  };

  useEffect(() => {
    if (name.length < 3) {
      setInputError("Name must be 3 or more characters");
    } else {
      setInputError("");
    }
    if (age.length >= 3) {
      setAgeError("Age must be in 2 characters");
    } else {
      setAgeError("");
    }
  }, [name, age]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {!!inputError && <p>{inputError}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {!!ageError && <p>{ageError}</p>}
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
