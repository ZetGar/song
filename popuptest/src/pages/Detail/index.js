import { useParams } from "react-router-dom";
import { DATA } from "./../../data/";

const Detail = () => {
  let { id } = useParams();
  let findpdt = DATA.find(function (x) {
    return x.id == id;
  });

  let num = findpdt.id + 1;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
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
