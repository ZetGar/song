import React from "react";
import Card from "./../../component/Card";
import { DATA } from "./../../data/";
import axios from "axios";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="main-bg"></div>
        <div className="main-product">
          {DATA.map((manu, i) => {
            return <Card DATA={DATA[i]} key={i} />;
          })}
        </div>
      </div>

      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((data) => {
              console.log(data);
            });
        }}
      >
        버튼
      </button>
    </>
  );
};

export default Home;
