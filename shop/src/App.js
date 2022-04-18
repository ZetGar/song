import React, { useState } from "react";
import "./App.scss";
import Data from "./contants/data";
import List from "./component/List";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, setshoes] = useState(Data);
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            ShoeShop
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                Features
              </a>
              <a class="nav-link" href="#">
                Pricing
              </a>
              <a class="nav-link disabled">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
      {/* 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

// function Home() {
//   return (
//     <section className="background">
//       <h5>20% season Off</h5>
//       <p>
//         This is simple hero unit, a simple jumbotron style component for calling
//         extra attention to featured content or information.
//       </p>
//       <button type="button" class="btn btn-primary">
//         Primary
//       </button>

//       <div className="container">
//         <div className="row">
//           {shoes.map((a, i) => {
//             return <List shoes={shoes[i]} i={i} />;
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Detail() {
//   <div>디테일페이지에요</div>;
// }

export default App;
