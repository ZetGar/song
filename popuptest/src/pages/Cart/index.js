import { memo, useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, agePluse } from "./../../store/user";
import { addCount, minusCount } from "./../../store.js";

let Child = memo(function () {
  console.log("재랜더링");
  return <div>자식임</div>;
});

// function 함수() {
//   return <p>반복문10억번 돌린 결과</p>;
// }

const Cart = () => {
  // let result = useMemo(() => {
  //   return 함수();
  // }, [state]);

  let cart = useSelector((state) => {
    // 모든 content
    // return state;

    // 원하는 content만 가져올땐?
    // return state.cart;
    return state.cart;
  });
  // console.log(a.user);
  // console.log(cart);

  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  let [count, setCount] = useState(0);
  return (
    <div>
      <Child />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <h6>
        {state.user.name} {state.user.age}의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(agePluse(10));
        }}
      >
        버튼
      </button>

      <Table>
        <thead>
          <tr>
            <th>number</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cart, i) => {
            return (
              <tr key={i}>
                <td>{cart.id + 1}</td>
                <td>{cart.name}</td>
                <td>{cart.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(cart.id));
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(minusCount(cart.id));
                    }}
                  >
                    -
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
