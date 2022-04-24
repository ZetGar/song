import { useState, useEffect } from "react";
import data from "./../contants/data";
import List from "./../component/List";

function Detail(props) {
  let [shoes, setshoes] = useState(data);

  useEffect(() => {
    console.log(111);
  });

  return (
    <div>
      <List shoes={shoes} />
      <div className="my-alert2">
        <p>재고가 얼마 남지 않았습니다.</p>
      </div>
    </div>
  );
}

export default Detail;
