import React, { createContext, useState, useEffect } from "react";
import "./App.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import About from "./pages/About";
import Cart from "./pages/Cart";

export let Context1 = createContext();

function App() {
  let obj = { name: "kim" };
  JSON.stringify(obj);
  localStorage.setItem("data", JSON.stringify(obj));

  let 꺼내기 = localStorage.getItem("data");
  JSON.parse(꺼내기);
  console.log(JSON.parse(꺼내기).name);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  });

  let navigate = useNavigate();
  let [재고] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            SHOE SHOP
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* usenavigate 뒤로가기 쌉가넝...! 앞으로 1도 됨 */}
            <Nav.Link
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/About");
              }}
            >
              about
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              cart
            </Nav.Link>

            {/* <Link to="/">Home</Link> */}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고 }}>
              <Detail />
            </Context1.Provider>
          }
        />
        <Route path="/cart" element={<Cart />} />

        {/* nested routes + outlet */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
