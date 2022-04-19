import { useState } from "react";
import data from "./../contants/data";
import List from "./../component/List";

function Detail(props) {
  let [shoes, setshoes] = useState(data);

  return (
    <div>
      <List shoes={shoes} />
      <div>디테일페이지</div>
    </div>
  );
}

export default Detail;
