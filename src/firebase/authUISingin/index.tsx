import { FC, useState, useEffect } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useHistory } from "react-router-dom";

const AuthUISingin: FC = () => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const uiConfig = {
    callbacks: {
      // 認証UIが表示される前に行われる処理
      uiShown: () => {
        // document.getElementById("loader").style.display = "none";
        setLoading(false);
      },
    },
    signInFlow: "popup",
    signInSuccessUrl: "/authUI",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
  };

  // signout用のハンドラ
  const signout = async (): Promise<void> => {
    try {
      await firebase.auth().signOut();
      alert("ログアウト成功!");
    } catch (error) {
      alert("ログアウト失敗!");
    }
  };

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) history.push("/signout");
        setLoading(false);
      });

    return () => unregisterAuthObserver();
  }, [history]);

  const tmp = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <p>
        ログインが必要です
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
        {loading && <div id="loader">Loading...</div>}
      </p>
    );
  };

  return (
    <div>
      {/* <tmp /> */}
      {tmp()}
    </div>
  );
};

export default AuthUISingin;
