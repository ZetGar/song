import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DATA } from "./../../data/";

const Detail = () => {
  let { id } = useParams();
  let findpdt = DATA.find(function (x) {
    return x.id == id;
  });

  let num = findpdt.id + 1;

  let [close, setClose] = useState(true);

  useEffect(() => {
    // html 렌더링 후에 동작함
    // setTimeout(() => {
    //   setClose(false);
    // }, 2000);
  });

  let [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* <div className="alert alert-warning">2초 이내 구매시 할인</div> */}
          {/* {close == true ? (
            <div className="alert alert-warning">2초 이내 구매시 할인</div>
          ) : null} */}

          {/* {close == true ? (
            <div className="popup">
              <div></div>
              <button
                onClick={() => {
                  setClose(false);
                }}
              >
                닫기
              </button>
            </div>
          ) : null} */}

          <img
            src={"https://codingapple1.github.io/shop/shoes" + num + ".jpg"}
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findpdt.title}</h4>
          <p>{findpdt.content}</p>
          <p>{findpdt.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

// 과거에 쓰던 방식

// class Detail2 extends React.Component {
//   componentDidMount() {}
//   componentDidUpdate() {}
//   componentWillUnmount() {}
// }
