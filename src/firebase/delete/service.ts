import { db } from "firebase-config";

const del = async (id: string): Promise<void> => {
  await db.collection("user").doc(id).delete();
};

export default del;
