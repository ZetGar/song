import { useState, useEffect } from "react";
import data from "./../contants/data";
import List from "./../component/List";

function Detail(props) {
  let [shoes, setshoes] = useState(data);

  return (
    <div>
      <h4>Detail</h4>
      <List shoes={shoes} />
    </div>
  );
}

export default Detail;
