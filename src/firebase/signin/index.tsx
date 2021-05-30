/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

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

  const history = useHistory();

  // signin用のハンドラ
  const signin = async (e: React.FormEvent<HTMLFormElement>) => {
    // submitのデフォルト挙動を停止
    e.preventDefault();
    const user = await signinWithEmailAndPassword(email, password);

    console.log("User情報：", user);
  };

  // googlesignin用ハンドラ
  const googleSignin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    // 別タブ開く場合はsignInWithPopup, 同一ウィンドウで行う場合はsignInWithRedirect
    const result = await firebase.auth().signInWithPopup(provider);
    // void (await firebase.auth().signInWithRedirect(provider));
  };

  // signout用のハンドラ
  const signout = async (): Promise<void> => {
    await signoutWithEmailAndPassword();
  };

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsLogin(!!user);
        // ログインしていたらログアウトページへ遷移
        if (user) history.push("/signout");
      });

    return () => unregisterAuthObserver();
  }, [history]);

  return (
    <div className="signin">
      <h2>ユーザー登録</h2>
      {isLogin ? (
        <button type="button" onClick={signout}>
          ログアウト
        </button>
      ) : (
        <>
          {/* メールアドレス用認証フォーム */}
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

          {/* Googleログイン用認証ボタン */}
          <button type="button" onClick={googleSignin}>
            Googleログイン
          </button>
        </>
      )}
    </div>
  );
};

export default SignIn;
