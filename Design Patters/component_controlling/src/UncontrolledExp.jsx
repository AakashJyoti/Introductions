import { useRef } from "react";

export default function UncontrolledExp() {
  const nameInput = useRef();
  const ageInput = useRef();
  const emailInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(emailInput.current.value);

    nameInput.current.value = "";
    ageInput.current.value = "";
    emailInput.current.value = "";
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
