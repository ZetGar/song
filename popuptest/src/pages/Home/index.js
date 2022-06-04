import React, { useState } from "react";
import Card from "./../../component/Card";
import { DATA } from "./../../data/";
import axios from "axios";

const Home = () => {
  let [shoes, setShoes] = useState(DATA);
  let [click, setClick] = useState(0);

  function BtnClick() {
    if (click === 0) {
      axios
        .get("https://codingapple1.github.io/shop/data2.json")
        .then((result) => {
          console.log(result.data);
          let newdata = [...shoes, ...result.data];
          setShoes(newdata);
        })
        // 예외 처리
        .catch(() => {
          console.log("Error");
        });
    } else if (click === 1) {
      // 로딩중 UI 띄우기
      axios
        .get("https://codingapple1.github.io/shop/data3.json")
        .then((result) => {
          console.log(result.data);
          let newdata = [...shoes, ...result.data];
          setShoes(newdata);
          // 로딩중 UI 숨기기
        })

        // 예외 처리
        .catch(() => {
          // 로딩중 UI 숨기기
          console.log("Error");
        });
    }
  }

  return (
    <>
      <div className="home">
        <div className="main-bg"></div>
        <div className="main-product">
          {shoes.map((manu, i) => {
            return <Card DATA={shoes[i]} key={i} />;
          })}
        </div>
      </div>

      <button
        className={click === 2 ? "close" : null}
        onClick={() => {
          setClick(click + 1);
          BtnClick();
        }}
      >
        버튼
      </button>
    </>
  );
};

function TabContent({ 탭 }) {
  return <div>{<div>내용0</div>}</div>;
}
export default Home;
