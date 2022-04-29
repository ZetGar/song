import React, { useState } from "react";

function Input() {
  // const [todo, setTodo] = useState(["고양이 간식사기", "오전 회의 들어가기"]);
  const heavyWork = () => {
    return ["고양이 간식사기", "오전 회의 들어가기"];
  };
  const [todo, setTodo] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleBtn = () => {
    setTodo((preveList) => {
      return [input, ...preveList];
    });
  };

  return (
    <div className="Input">
      <h2 className="Title">TodoList</h2>
      <div className="wrap">
        <div className="user">
          <div className="user_profile">
            <p className="user_name">Abella</p>
            <p className="user_goal">abcdefghijk</p>
          </div>
          <div className="profile_picture"></div>
        </div>

        <div className="schedule">
          <input type="text" value={input} onChange={handleInput} />
          {/* {input} */}
          <button className="btn" onClick={handleBtn}>
            upload
          </button>
        </div>

        <div className="user_schedule">
          <div>
            {todo.map((todo, idx) => {
              return <p key={idx}>{todo}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
