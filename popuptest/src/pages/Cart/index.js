import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Cart = () => {
  let cart = useSelector((state) => {
    // 모든 content
    // return state;

    // 원하는 content만 가져올땐?
    return state.cart;
  });
  // console.log(a.user);
  console.log(cart);

  return (
    <div>
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
                <td>안녕</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
