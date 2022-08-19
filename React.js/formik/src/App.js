import "./App.css";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

function App() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <form className="App" onSubmit={handleSubmit}>
      <div className="name block">
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? (
          <p className="error">{errors.name}</p>
        ) : null}
      </div>
      <div className="email block">
        <label htmlFor="email">E mail</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email Id"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </div>
      <div className="password block">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <p className="error">{errors.password}</p>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
