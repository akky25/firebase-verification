/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from "react";

import "./Signup.css";
import { signupWithEmailAndPassword } from "./service";

const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    // submitのデフォルト挙動を停止
    e.preventDefault();
    const user = await signupWithEmailAndPassword(email, password);

    console.log("User情報：", user);
  };

  return (
    <div className="signup">
      <h2>ユーザー登録</h2>
      <form onSubmit={signup}>
        <label htmlFor="email">email:</label>
        <input
          type="text"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export default SignIn;
