import { Link } from "react-router-dom";

function Gate() {
  return (
    <div className="gate">
      <h3>React Hook 공부하기</h3>
      <div>
        <Link to="/useState"> useState </Link>
      </div>
      <div>
        <Link to="/useState/time"> Time </Link>
      </div>
      <div>
        <Link to="/useState/input"> Input </Link>
      </div>
    </div>
  );
}

export default Gate;
