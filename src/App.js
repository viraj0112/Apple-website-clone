import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";
// import macbook2 from "./images/macbook2.jpg";
// import macbook from "./images/macbook.jpg";
const App = () => {
  return (
    <>
      <div className="offer_dropdown">
        Get 5% instant Cashback up to &#8377;6000 with qualifying HDFC Bank
        credit cards on orders over &#8377;54900.Plus 6 months No Cost EMI with
        qualifying credit cards from most leading banks.
        <Link to="/info">Learn More</Link>
      </div>
      <div className="macbook-cover-page">
        <div className="mac-title">
          <h1>MacBook Air </h1>supercharged with M2.
        </div>
        <div className="iphone-cover-page-div">
          <div className="apple-watch-7"></div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default App;
