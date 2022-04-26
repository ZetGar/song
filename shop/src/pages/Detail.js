import { useState } from "react";
import data from "./../contants/data";
import List from "./../component/List";

// let 재고context = React.createContext();

function Detail(props) {
  let [shoes, setshoes] = useState(data);
  // let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div>
      <h4>Detail</h4>
      {/* <재고context.Provider value={재고}> */}
      <List shoes={shoes} />
      {/* </재고context.Provider> */}
    </div>
  );
}

export default Detail;
