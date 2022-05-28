import Card from "./../../component/Card";
import { DATA } from "./../../data/";

const Home = () => {
  return (
    <div className="home">
      <div className="main-bg"></div>
      <div className="main-product">
        {DATA.map((manu, i) => {
          return <Card DATA={DATA[i]} i={i} />;
        })}
      </div>
    </div>
  );
};

export default Home;
