/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState, useEffect } from "react";

import "./Signin.css";
import firebase from "firebase-config";
import {
  signinWithEmailAndPassword,
  signoutWithEmailAndPassword,
} from "./service";

const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  // signin用のハンドラ
  const signin = async (e: React.FormEvent<HTMLFormElement>) => {
    // submitのデフォルト挙動を停止
    e.preventDefault();
    const user = await signinWithEmailAndPassword(email, password);

    console.log("User情報：", user);
  };

  // signout用のハンドラ
  const signout = async (): Promise<void> => {
    await signoutWithEmailAndPassword();
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsLogin(!!user);
    });
  }, []);

  return (
    <div className="signin">
      <h2>ユーザー登録</h2>
      {isLogin ? (
        <button type="button" onClick={signout}>
          ログアウト
        </button>
      ) : (
        <form onSubmit={signin}>
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
          <button type="submit">ログイン</button>
        </form>
      )}
    </div>
  );
};

export default SignIn;
