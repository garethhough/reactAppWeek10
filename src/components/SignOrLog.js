import { useState } from "react";
import { signUp } from "../utils/Index";
import { login } from "../utils/Index";

const SignOrLog = ({ setter }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signUpHandler = async (e) => {
     e.preventDefault();
    await signUp(username, email, password, setter);
  };
  const loginHandler = async (e) => {
    e.preventDefault();
   await login(username, password, setter);
 };

  return (
    <div>
      <p>Sign up here</p>
    <form onSubmit={signUpHandler}>
      <input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
      <p>Log in here</p>
    </form><form onSubmit={loginHandler}>
        <input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
        <input placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      </div>
  );
};

export default SignOrLog;
