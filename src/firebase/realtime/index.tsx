import { FC, useState, useEffect } from "react";

import { db } from "firebase-config";
import { User } from "firebase/model";

const RealTime: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const unsubscribe = db.collection("user").onSnapshot((querySnapshot) => {
      // console.log(querySnapshot);
      const tmpUsers = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as User),
        userId: doc.id,
      }));
      setUsers(tmpUsers);
    });

    return () => {
      unsubscribe();
    };
  });

  const userListeItems = users.map((user) => (
    <li key={user.userId}>
      <p className="useItem">{user.userId}</p>
      <p className="useItem">{user.name}</p>
      <p className="useItem">{user.age.toString()}</p>
    </li>
  ));

  return (
    <div>
      <ul>{userListeItems}</ul>
    </div>
  );
};

export default RealTime;
