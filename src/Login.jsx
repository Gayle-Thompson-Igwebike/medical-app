import { useState } from "react";

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

  return (
    <div>
      <form>
        <h1>Log In</h1>
        <label htmlFor="email">Enter your email</label>
        <input
          id="email"
          type="email"
          placeholder="myname@emailprovider.com"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="pwd">Enter your password</label>
        <input
          id="pwd"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Login;
