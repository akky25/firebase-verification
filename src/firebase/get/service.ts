import { db } from "firebase-config";
import { User } from "firebase/model";

// ドキュメントの取得
export const handleClickFetchButton = (): void => {
  void db
    .collection("user")
    .doc("1WXg8fmJhgWKjeqtmp5j")
    .get()
    .then((doc) => {
      console.log(doc.data());
    });
  console.log("fetch clicked");
};

// ドキュメントの取得 async/awaitを使った方法
export const handleClickFetchButton2 = async (): Promise<void> => {
  const doc = await db.collection("user").doc("1WXg8fmJhgWKjeqtmp5j").get();
  const data = doc.data();
  console.log(data);
  console.log("fetch clicked");
};

// コレクションから全ドキュメント取得
export const getAllDocuments = async () => {
  const snapshot = await db.collection("user").get();
  snapshot.forEach((doc) => {
    console.log(doc.data());
  });

  return snapshot;
};

// ドキュメントを絞り込み
export const handleClickFetchDocuments2 = async (): Promise<void> => {
  const snapshot = await db.collection("user").where("age", "<=", 20).get();
  snapshot.forEach((doc) => {
    console.log(doc.data());
  });
};

// 件数を絞り込み
export const handleClickFetchDocuments3 = async (): Promise<void> => {
  const snapshot = await db.collection("user").limit(1).get();
  snapshot.forEach((doc) => {
    console.log(doc.data());
  });
};
