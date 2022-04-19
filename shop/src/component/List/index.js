// import { useHistory } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function List(props) {
  // history 방문 기록등을 저장해놓은 object
  // let history = useHistory();

  // useHistory가 계속 안되서 찾아본 다른 것
  let navigate = useNavigate();
  let { id } = useParams();

  return (
    <div className="col-md-4">
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

export default List;
