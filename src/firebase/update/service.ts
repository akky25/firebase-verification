import { db } from "firebase-config";

const update = async (id: string, name: string, age: number): Promise<void> => {
  const data = {
    name,
    age,
  };
  await db.collection("user").doc(id).update(data);
};

export default update;
