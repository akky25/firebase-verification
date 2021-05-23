import { FC, useState } from "react";

import { User } from "firebase/model";
import {
  handleClickFetchButton,
  handleClickFetchButton2,
  getAllDocuments,
  handleClickFetchDocuments2,
  handleClickFetchDocuments3,
} from "firebase/get/service";

const Get: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  // 全権取得後にuseStateを更新する
  const handleClickFetchDocuments = () => {
    const addUser = async () => {
      const snapshot = await getAllDocuments();
      const arrayUsers: User[] = [];
      snapshot.forEach((doc) => {
        arrayUsers.push({
          ...(doc.data() as User),
          userId: doc.id,
        });
      });
      setUsers(arrayUsers);
    };
    void addUser();
  };

  // stateのユーザーのリストを作成
  const userListeItems = users.map((user) => (
    <li key={user.userId}>
      {user.name} : {user.age}
    </li>
  ));

  return (
    <div>
      <div>
        <button type="button" onClick={handleClickFetchButton}>
          ドキュメント取得
        </button>
        <button type="button" onClick={handleClickFetchButton2}>
          ドキュメント取得2
        </button>
        <button type="button" onClick={handleClickFetchDocuments}>
          全ドキュメント取得
        </button>
        <ul>{userListeItems}</ul>
        <button type="button" onClick={handleClickFetchDocuments2}>
          ageが20以下のドキュメント取得
        </button>
        <button type="button" onClick={handleClickFetchDocuments3}>
          1件だけドキュメント取得
        </button>
      </div>
    </div>
  );
};

export default Get;
