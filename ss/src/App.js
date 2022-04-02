/* eslint-disable*/

import React, { useState, useEffect } from "react";
import "./App.scss";
import Modal from "./components/Modal";

function App() {
  // var data = "안녕하세요";
  let posts = "강남 고기 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "축구는 왜 하니",
  ]);

  function 제목바꾸기() {
    // 글제목변경(["여자 코트 추천", "강남 우동 맛집", "축구는 왜 하니"]);
    var newArray = [...글제목];
    newArray[0] = "여자 코트 추천";
    글제목변경(newArray);

    // 버튼 눌렀을 때 순서 변경
    // var newArray = [...글제목];
    // newArray = ["강남 우동 맛집", "여자 코트 추천", "축구는 왜 하니"];
    // 글제목변경(newArray);
  }

  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h1>개발 blog</h1>
        {/* <div>여기에 데이터바인딩?</div> */}
        {/* <div>{data}</div> */}
      </div>

      {/* <button onClick={제목바꾸기}>버튼</button> */}

      <div className="list">
        <h3>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h3>
        <p> 2월 17일 발행 </p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[1]} </h3>
        <p> 2월 17일 발행 </p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[2]} </h3>
        <p> 2월 17일 발행 </p>
        <hr />
      </div>

      <Modal 글제목={글제목} />
    </div>
  );
}

export default App;
