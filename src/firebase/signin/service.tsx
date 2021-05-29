import firebase from "firebase-config";

export const signinWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential | undefined> => {
  try {
    const auth = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    alert("ログイン成功!");

    return auth;
  } catch (error) {
    alert("ログイン失敗");
    console.log(error);

    return undefined;
  }
};

export const signoutWithEmailAndPassword = async (): Promise<void> => {
  try {
    await firebase.auth().signOut();
    alert("ログアウト成功!");
  } catch (error) {
    alert("ログアウト失敗!");
  }
};
