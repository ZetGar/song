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
  }

  // let [따봉, 따봉변경] = useState(0);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  function 따봉바꾸기() {
    var newArray = [...따봉];
    따봉변경(newArray + 1);
  }

  let [modal, setmodal] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  // // for반복문을 쓰고 싶다면?
  // function 반복된UI() {
  //   var array = [];
  //   for (var i = 0; i < 3; i++) {
  //     array.push(<div>안녕</div>);

  //     return array;
  //   }
  // }

  // var array = [2, 3, 4];

  // var newarray = array.map(function (a) {
  //   return a * 2;
  // });
  // console.log(array);
  // console.log(newarray);

  return (
    <div className="App">
      <div className="black-nav">
        <h1>개발 blog</h1>
      </div>

      {/* <button onClick={제목바꾸기}>버튼</button> */}

      {/* 반복문 쓰는 법 */}
      {글제목.map(function (글, i) {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {글}
              <span
                onClick={() => {
                  var newArray = [...따봉];
                  newArray[i]++;
                  따봉변경(newArray);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h3>
            <p> 2월 17일 발행 </p>
            <hr />
          </div>
        );
      })}

      {/* {반복된UI()} */}

      {/* {modal === true ? <Modal 글제목={글제목} /> : null} */}

      <button
        onClick={() => {
          setmodal(!modal);
        }}
      >
        버튼
      </button>

      {modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null}
    </div>
  );
}

export default App;
