import React, { useState } from "react";

function Time() {
  const [time, setTime] = useState(1);
  const timefunction = () => {
    let 시간변경 = 0;

    if (time >= 12) {
      시간변경 = 1;
    } else {
      시간변경 = time + 1;
    }

    setTime(시간변경);
  };
  return (
    <div className="Time">
      <div>현재시간 : {time}시</div>
      <button
        onClick={() => {
          setTime(timefunction);
        }}
      >
        update
      </button>
    </div>
  );
}

export default Time;
