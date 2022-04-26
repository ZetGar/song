// import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Inventory from "./../Inventory";

function List(props) {
  // history 방문 기록등을 저장해놓은 object
  // let history = useHistory();

  // useHistory가 계속 안되서 찾아본 다른 것 route v6부터는 useHistory->useNavigate로 변경되서 사용된다고 함
  let navigate = useNavigate();

  let { id } = useParams();
  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState("");

  // let 재고 = useContext(재고context);

  let [재고, 재고변경] = useState([10, 11, 12]);

  useEffect(() => {
    // axios 페이지 첫 로드-> ajax 요청할때 꼭 useEffect에 대괄호 잊지말것!!
    // axios.get();

    // 2초후에 alert 창을 안보이게 해주세요
    let timer = setTimeout(() => {
      alert변경(false);
      // 업데이트 될때도 실행이 됨 -> useEffect의 마지막에 대괄호 [] 안에 들어간 게 (특정 state) 재랜더링 될때만 실행되게 됨, 여러개 가능

      // 조건 안에 아무것도 없으면? 공란이 변경될때만 useEffect 실행해달란 얘기 -> 영영 실행되지 않음 그냥 List 업데이트시 실행이 안됨 -> 일종의 트릭 List 등장시 한번 실행하고 끝남
    }, 2000);

    console.log("안녕");

    // setTImeout 이런거 쓸 때 주의점 -> 그냥 냅두면 2초 전에 뒤로가기 등 있으면 버그가 발생할 수 있어서 꼭꼭꼭 return으로 깨끗하게 제거하는 코드 필요함
    return () => {
      clearTimeout(timer);
    };

    // 컴포넌트가 사라질 때 코드 실행
    // return ()=>{
    //   실행할코드;
    // };

    // 여러개를 사용하고 싶다면 useEffect 여러개 만듦 (순서대로 실행)
  }, []);

  return (
    <div className="col-md-4">
      {alert === true ? <SAlert /> : null}

      {/* <input
        onChange={(e) => {
          inputData변경(e.target.value);
        }}
      /> */}

      <img
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.shoes[id].id + 1) +
          ".jpg"
        }
      />
      <h4> {props.shoes[id].title} </h4>
      <p>
        {props.shoes[id].content} & {props.shoes[id].price}원
      </p>

      {/* <Inventory 재고={재고} /> */}

      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          재고변경([9, 11, 12]);
        }}
      >
        주문하기
      </button>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          navigate("/");
          // history.goBack();
        }}
      >
        뒤로가기
      </button>

      {/* 탭 만들기 */}
      <button className="btn" eventKey="link0">
        1
      </button>
      <button className="btn" eventKey="link1">
        2
      </button>
      <button className="btn" eventKey="link2">
        3
      </button>

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

function SAlert() {
  return (
    <div className="my-alert2">
      <p>재고가 얼마 남지 않았습니다.</p>
    </div>
  );
}

export default List;
