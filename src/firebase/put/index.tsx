/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from "react";

import { set, add, add2 } from "./service";

const Put: FC = () => {
  // add()実行時のID表示用文字列
  const [addMsg, setAddMsg] = useState<string>();

  // addするname,age
  const [name, setName] = useState<string>();
  const [age, setAge] = useState<string>();
  const [addMsg2, setAddMsg2] = useState<string>();

  // add()実行しstateにIDを追加
  const addHandler = async () => {
    const mesage = await add();
    setAddMsg(mesage);
  };

  // name,ageを指定追加するhandler
  const addHandler2 = async () => {
    if (!name || !age) {
      alert("user or age が空です");

      return;
    }
    if (Number.isNaN(+age)) {
      alert("ageは半角数字で入力してください");
      setAge("");

      return;
    }
    const mesage = await add2(name, +age);
    setAddMsg2(mesage);
    setName("");
    setAge("");
  };

  return (
    <div>
      <button type="button" onClick={set}>
        ID指定して追加
      </button>
      <button type="button" onClick={addHandler}>
        ID自動生成で追加
      </button>
      {addMsg && <p>{addMsg}</p>}
      <div className="addform">
        <label htmlFor="username">name：</label>
        <input
          type="text"
          id="username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="userage">age：</label>
        <input
          type="text"
          id="userage"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button type="button" onClick={addHandler2}>
          追加
        </button>
        {addMsg2 && <p className="msg">{addMsg2}</p>}
      </div>
    </div>
  );
};

export default Put;
