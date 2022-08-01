import React from "react";
import { Outlet, Link } from "react-router-dom";
import { RiAppleLine } from "react-icons/ri";

import { BsBag } from "react-icons/bs";

import "./Header.css";
function Header() {
  return (
    <>
      <div className="main_header">
        <nav>
          <div className="contents">
            <Link to="/">
              <RiAppleLine />
            </Link>
            <Link to="/store">store</Link>
            <Link to="/Mac">Mac</Link>
            <Link to="/iPad">iPad</Link>
            <Link to="/iPhone">iPhone</Link>
            <Link to="/Watch">Watch</Link>
            <Link to="/Airpods">AirPods</Link>
            <Link to="/Home">TV & Home</Link>
            <Link to="/Exclusives">Only on Apple</Link>
            <Link to="/Accessories">Accessories</Link>
            <Link to="/Support">Support</Link>
            <Link to="/bag">
              <BsBag />
            </Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
export default Header;
