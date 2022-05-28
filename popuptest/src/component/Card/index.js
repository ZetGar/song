import { Link } from "react-router-dom";

const Card = (props) => {
  let id = props.DATA.id + 1;
  return (
    <Link to={"/detail/" + props.DATA.id}>
      <img src={"https://codingapple1.github.io/shop/shoes" + id + ".jpg"} />
      <h4>{props.DATA.title}</h4>
      <p>{props.DATA.content}</p>
      <p>{props.DATA.price}원</p>
    </Link>
  );
};

export default Card;
