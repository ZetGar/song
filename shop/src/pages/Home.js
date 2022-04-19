import { useState } from "react";
import Data from "./../contants/data";
import HList from "./../component/HList";

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
            return <HList shoes={shoes[i]} i={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;
