import { useState, useTransition, useDefferedValue } from "react";

// 성능저하 0이 10000개 담긴 어레이 자료
let a = new Array(10000).fill(0);

function New() {
  let [name, setName] = useState("");
  let [isPending, 늦게처리] = useTransition();
  let state = useDefferedValue(name);

  return (
    <div className="New">
      <input
        onChange={(e) => {
          늦게처리(() => {
            setName(e.target.value);
          });
          // setName(e.target.value);
        }}
      />
      {isPending
        ? "로딩중"
        : a.map(() => {
            // return <div>{name}</div>;
            return <div>{state}</div>;
          })}
    </div>
  );
}

export default New;
