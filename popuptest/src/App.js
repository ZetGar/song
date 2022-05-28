import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import About from "./pages/About";

function App() {
  let navigate = useNavigate();

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
                navigate("/detail");
              }}
            >
              detail
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/About");
              }}
            >
              about
            </Nav.Link>

            {/* <Link to="/">Home</Link> */}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />

        {/* nested routes + outlet */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
      </Routes>

      <div className="main-bg"></div>
    </div>
  );
}

export default App;
