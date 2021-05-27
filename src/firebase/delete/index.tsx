/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from "react";

import del from "firebase/delete/service";

const Delete: FC = () => {
  const [id, setId] = useState<string>();

  const updateHandler = async () => {
    // 空かチェック
    if (!id) {
      alert("id が空です");

      return;
    }
    await del(id);
    setId("");
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
      <button type="button" onClick={updateHandler}>
        削除
      </button>
    </div>
  );
};

export default Delete;
