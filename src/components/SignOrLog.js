import { useState } from "react";
import { signUp } from "../utils/Index";
import { login } from "../utils/Index";

const SignOrLog = ({ setter }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    await signUp(username, email, password, setter);
    await login(username, password, setter);
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder ="username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignOrLog;
