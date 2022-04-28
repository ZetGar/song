import React, { useState } from "react";
import "./App.scss";

function App() {
  const [time, setTime] = useState(1);
  // time
  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);

    // Q. useState가 if문 안쪽으로 들어가는건 안되는거..? 랜더링이 너무 많이 되서 그런건가...?
    // if (time >= 12) {
    //   setTime(1);
    // } else {
    //   setTime(time + 1);
    // }
  };

  // imput
  const [names, setNames] = useState(["홍길동", "김민수"]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleupload = () => {
    setNames((prevState) => {
      console.log(prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div className="App">
      {/* time */}
      <span> 현재 시각 : {time}시 </span>
      <button onClick={handleClick}>Update</button>
      <br />
      <br />
      {/* imput */}
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleupload}>Upload</button>
      <br />
      {/* {input} */}
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}{" "}
    </div>
  );
}

export default App;
