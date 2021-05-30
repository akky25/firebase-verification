import firebase from "firebase-config";

// eslint-disable-next-line import/prefer-default-export
export const signupWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential | undefined> => {
  try {
    const auth = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    // どちらかのやり方を使う
    void firebase.auth().currentUser?.sendEmailVerification();
    // void auth.user?.sendEmailVerification();
    alert("登録成功!");

    return auth;
  } catch (error) {
    alert("登録失敗");
    console.log(error);

    return undefined;
  }
};
