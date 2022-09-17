<div className="login_input">
  <p>Password</p>
  <input
    type="text"
    name="userPassword"
    id=""
    placeholder="Password"
    {...register("userPassword", {
      required: true,
      minLength: 8,
      pattern:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
    })}
  />
  {errors?.userPassword && errors?.userPassword?.type === "required" && (
    <p
      style={{
        color: "red",
        fontSize: "14px",
        fontWeight: "bold",
        marginTop: "-5px",
        position: "absolute",
        top: "80px",
      }}
    >
      Password is required.
    </p>
  )}
  {errors?.userPassword && errors?.userPassword?.type === "minLength" && (
    <p
      style={{
        color: "red",
        fontSize: "14px",
        fontWeight: "bold",
        marginTop: "-5px",
      }}
    >
      Mininum 8 caracters required.
    </p>
  )}
  {errors?.userPassword && errors?.userPassword?.type === "pattern" && (
    <p
      style={{
        color: "red",
        fontSize: "14px",
        fontWeight: "bold",
        marginTop: "-5px",
        width: "250px",
        lineHeight: "14px",
      }}
    >
      Password must contain Special Character and Number.
    </p>
  )}
</div>;
