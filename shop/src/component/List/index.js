// import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function List(props) {
  // history 방문 기록등을 저장해놓은 object
  // let history = useHistory();

  // useHistory가 계속 안되서 찾아본 다른 것
  let navigate = useNavigate();
  let { id } = useParams();
  let [on, seton] = useState(true);

  useEffect(() => {
    console.log(111);

    // 2초후에 alert 창을 안보이게 해주세요
    let timer = setTimeout(() => {
      SAlert == true ? <SAlert /> : (seton = false);
    }, 2000);

    // 컴포넌트가 사라질 때 코드 실행
    // return ()=>{
    //   실행할코드;
    // };

    // 여러개를 사용하고 싶다면 useEffect 여러개 만듦 (순서대로 실행)
  });

  return (
    <div className="col-md-4">
      <SAlert />

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
      <button type="button" class="btn btn-primary">
        주문하기
      </button>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          navigate();
        }}
      >
        뒤로가기
      </button>
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
