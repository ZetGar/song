import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

function List(props) {
  // function pDetail(e) {
  //   window.location.href = "/detail:id";
  // }

  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.shoes.id + 1) +
          ".jpg"
        }
      />
      <h4> {props.shoes.title} </h4>
      <p>
        {props.shoes.content} & {props.shoes.price}원
      </p>

      <Link
        to={"/detail/" + props.shoes.id}
        type="button"
        class="btn btn-primary"
      >
        주문하기
      </Link>
    </div>
  );
}

export default List;
