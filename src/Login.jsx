import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);

  function handleChange(event) {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    // do something
    event.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <label htmlFor="email-login">Enter your email</label>
        <input
          id="email-login"
          type="email"
          name="email"
          placeholder="myname@emailprovider.com"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="pwd">Enter your password</label>
        <input
          id="pwd"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
