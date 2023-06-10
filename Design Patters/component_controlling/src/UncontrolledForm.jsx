import { createRef } from "react";

export default function UncontrolledForm() {
  const nameInput = createRef();
  const ageInput = createRef();
  const emailInput = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(emailInput.current.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input name="name" type="text" placeholder="Name" ref={nameInput} />
      <input name="age" type="number" placeholder="Age" ref={ageInput} />
      <input name="email" type="email" placeholder="Email" ref={emailInput} />
      <input type="submit" value="Submit" />
    </form>
  );
}
