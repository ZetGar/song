import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./../../store.js";

const Cart = () => {
  let dispatch = useDispatch();

  let cart = useSelector((state) => {
    // 모든 content
    // return state;

    // 원하는 content만 가져올땐?
    // return state.cart;
    return state;
  });
  // console.log(a.user);
  console.log(cart);

  return (
    <div>
      {cart.user}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cart, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{cart.name}</td>
                <td>{cart.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeName());
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
