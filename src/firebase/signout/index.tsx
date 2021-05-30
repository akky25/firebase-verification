import { FC, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import firebase from "firebase-config";

const SingOut: FC = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (!user) history.push("/signin");
        setIsLoading(false);
      });

    return () => unregisterAuthObserver();
  }, [history]);

  const singout = async () => {
    try {
      await firebase.auth().signOut();
      alert("ログアウト成功!");
    } catch (error) {
      alert("ログアウト失敗!");
    }
  };

  return (
    <>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <button type="button" onClick={singout}>
          サインアウト
        </button>
      )}
    </>
  );
};

export default SingOut;
