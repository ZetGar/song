import { useState } from "react";
import Data from "./../contants/data";
import HList from "./../component/HList";
import axios from "axios";

function Home() {
  let [shoes, setshoes] = useState(Data);

  return (
    <section className="background">
      <h5>20% season Off</h5>
      <p>
        This is simple hero unit, a simple jumbotron style component for calling
        extra attention to featured content or information.
      </p>
      <button type="button" class="btn btn-primary">
        Primary
      </button>

      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <HList shoes={shoes[i]} i={i} key={i} />;
          })}
        </div>
        <button
          className="btn"
          onClick={() => {
            // 로딩중이라는 UI 띄움

            // post 요청
            // axios.post("서버URL", { id: "codingapple", pw: 1234 });

            // fetch("https://codingapple1.github.io/shop/data2.json");
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((result) => {
                // 로딩중이라는 UI 안보이게 처리
                console.log(result.data);
                setshoes([...shoes, ...result.data]);
              })
              .catch(() => {
                // 로딩중이라는 UI 안보이게 처리
                console.log("실패");
              });
            // 1. axios.get (데이터 요청할 url) 2. 성공하면 then() 3.실패하면 catch()
            // 우리가 요청한 자료는 따옴표가 있는 JSON -> axios를 쓰면 JSON을 Object로 알아서 바꿔줌
          }}
        >
          더보기
        </button>
      </div>
    </section>
  );
}

export default Home;
