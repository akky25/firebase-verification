import { db } from "firebase-config";
import { User } from "firebase/model";

// IDを指定してset()で追加
export const set = async () => {
  const data = {
    name: "set user",
    age: "18",
  };
  await db.collection("user").doc("1").set(data);
};

// IDが自動生成される追加
export const add = async (): Promise<string> => {
  const data = {
    name: "add user",
    age: "38",
  };
  const res = await db.collection("user2").add(data);

  return `add id : ${res.id}`;
};

// name,ageを指定してadd
export const add2 = async (name: string, age: number): Promise<string> => {
  const data = {
    name,
    age,
  };
  const res = await db.collection("user").add(data);

  return `add id : ${res.id}`;
};
