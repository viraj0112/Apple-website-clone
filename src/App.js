import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";
import macbook2 from "./images/macbook2.jpg";
import macbook from "./images/macbook.jpg";
const App = () => {
  return (
    <>
      <div className="offer_dropdown">
        Get 5% instant Cashback up to &#8377;6000 with qualifying HDFC Bank
        credit cards on orders over &#8377;54900.Plus 6 months No Cost EMI with
        qualifying credit cards from most leading banks.
        <Link to="/info">Learn More</Link>
      </div>
      <div className="main_name">
        <strong>MacBook Air </strong>
      </div>
      <div className="text">supercharged with M2 chip.</div>
      <div className="container_1">
        <div className="macbook_air_image">
          <img
            src={macbook2}
            alt="MacBook Air M2 chip"
            height={300}
            width={300}
          />
          <img src={macbook} alt="" />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default App;
