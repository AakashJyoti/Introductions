import { useForm } from "react-hook-form";
import Logo from "../assets/apjlogo 3.png";
import LoginSideImage from "../assets/elegantly-dressed-woman-makes-handmade-necklaces-working-with-needles-thread-jewelry-workshop 1.png";

const alphaNumbericRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitLoginForm = (data) => {
    console.log(data);
  };

  return (
    <div className="login_page">
      <div className="login_box">
        <div className="from_part">
          <div className="img_box">
            <img src={Logo} alt="" />
            <p className="title">WLECOME</p>
          </div>
          <form className="login_form" onSubmit={handleSubmit(submitLoginForm)}>
            <div className="form-input">
              <div className="login_input">
                <p>User Id</p>
                <input
                  type="text"
                  name="userId"
                  id=""
                  placeholder="User Id"
                  {...register("userId", { required: true })}
                />
                {errors.userId && (
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
                    Name is required.
                  </p>
                )}
              </div>
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
                    validate: {
                      lowerCase: (value) =>
                        /^(?=.*[a-z])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/.test(value),
                      upperCase: (value) =>
                        /^(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/.test(value),
                      number: (value) =>
                        /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/.test(value),
                      specialChar: (value) =>
                        /^(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/.test(
                          value
                        ),
                    },
                  })}
                />
                {errors?.userPassword &&
                  errors?.userPassword?.type === "lowerCase" && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginTop: "-8px",
                        lineHeight: "14px",
                      }}
                    >
                      Must contain LowerCase
                    </p>
                  )}
                {errors?.userPassword &&
                  errors?.userPassword?.type === "upperCase" && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginTop: "-8px",
                        lineHeight: "14px",
                      }}
                    >
                      Must contain UpperCase
                    </p>
                  )}
                {errors?.userPassword &&
                  errors?.userPassword?.type === "number" && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginTop: "-8px",
                        lineHeight: "14px",
                      }}
                    >
                      Must contain Number
                    </p>
                  )}
                {errors?.userPassword &&
                  errors?.userPassword?.type === "specialChar" && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginTop: "-8px",
                        lineHeight: "14px",
                      }}
                    >
                      Must contain Special Character
                    </p>
                  )}
                {errors?.userPassword &&
                  errors?.userPassword?.type === "required" && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginTop: "-8px",
                        lineHeight: "14px",
                      }}
                    >
                      Password is required.
                    </p>
                  )}
                {errors?.userPassword &&
                  errors?.userPassword?.type === "minLength" && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginTop: "-10px",
                        width: "250px",
                        lineHeight: "14px",
                      }}
                    >
                      Mininum 8 caracters required.
                    </p>
                  )}
              </div>
            </div>
            <button className="login_button">Log In</button>
          </form>

          <p className="forgot_pass">Forgot Password ?</p>
        </div>
        <div className="img_part">
          <img src={LoginSideImage} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Login;
