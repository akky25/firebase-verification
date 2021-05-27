/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from "react";

import update from "firebase/update/service";

const Update: FC = () => {
  const [name, setName] = useState<string>();
  const [age, setAge] = useState<string>();
  const [id, setId] = useState<string>();

  const updateHandler = async () => {
    // 空かチェック
    if (!id || !name || !age) {
      alert("id or user or age が空です");

      return;
    }

    // ageが半角数字
    if (Number.isNaN(+age)) {
      alert("ageは半角数字で入力してください");
      setAge("");

      return;
    }
    await update(id, name, +age);
    setId("");
    setName("");
    setAge("");
  };

  return (
    <div className="addform">
      <label htmlFor="username">id：</label>
      <input
        type="text"
        id="username"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
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
      <button type="button" onClick={updateHandler}>
        更新
      </button>
    </div>
  );
};

export default Update;
