import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  // var data = "안녕하세요";
  let posts = "강남 고기 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "축구는 왜 하니",
  ]);

  return (
    <div className="App">
      <div className="black-nav">
        <h1>개발 blog</h1>
        {/* <div>여기에 데이터바인딩?</div> */}
        {/* <div>{data}</div> */}
      </div>

      <div className="list">
        <h3> {글제목[0]} </h3>
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
    </div>
  );
}

export default App;
