import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DATA } from "./../../data/";
import { Nav } from "react-bootstrap";

import { Context1 } from "./../../App.js";

const Detail = () => {
  let { 재고 } = useContext(Context1);

  let { id } = useParams();
  let findpdt = DATA.find(function(x) {
    return x.id == id;
  });

  let num = findpdt.id + 1;

  let [close, setClose] = useState(true);

  useEffect(() => {
    // html 렌더링 후에 동작함
    setTimeout(() => {
      setClose(false);
    }, 2000);
  });

  let [tab, setTab] = useState(0);

  let [fade2, setFade2] = useState("");
  useEffect(() => {
    setFade2("end");

    return () => {
      setFade2("");
    };
  }, []);

  return (
    <div className={`container start ${fade2}`}>
      <div className="row">
        <div className="col-md-6">
          {/* <div className="alert alert-warning">2초 이내 구매시 할인</div> */}
          {close == true ? (
            <div className="alert alert-warning">2초 이내 구매시 할인</div>
          ) : null}

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

        <Nav fill variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(0);
              }}
              eventKey="link0"
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(1);
              }}
              eventKey="link1"
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(2);
              }}
              eventKey="link2"
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContent tab={tab} />

        {/* {
    tab == 0 ? <div>내용0</div> : null;
  }
  {
    tab == 1 ? <div>내용1</div> : null;
  } */}
      </div>
    </div>
  );

  function TabContent({ tab }) {
    // if (tab == 0) {
    //   return <div>내용0</div>;
    // } else if (tab == 1) {
    //   return <div>내용1</div>;
    // } else if (tab == 2) {
    //   return <div>내용2</div>;
    // }

    let [fade, setFade] = useState("");
    let { 재고 } = useContext(Context1);

    useEffect(() => {
      // setFade("end");

      let a = setTimeout(() => {
        setFade("end");
      }, 10);

      return () => {
        clearTimeout(a);
        setFade("");
      };
    }, [tab]);

    return (
      <div className={`start ${fade}`}>
        {
          [
            <div>재고 : {재고[0]}</div>,
            <div>재고 : {재고[1]}</div>,
            <div>재고 : {재고[2]}</div>,
          ][tab]
        }
      </div>
    );
  }
};

export default Detail;

// 과거에 쓰던 방식

// class Detail2 extends React.Component {
//   componentDidMount() {}
//   componentDidUpdate() {}
//   componentWillUnmount() {}
// }
