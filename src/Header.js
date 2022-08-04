import React from "react";
import { Outlet, Link } from "react-router-dom";
// import { RiAppleLine } from "react-icons/ri";

// import { BsBag } from "react-icons/bs";

import "./Header.css";

function Header() {
  
  return (
    <>
      <div className="nav-container">
        <nav>
          <ul className="mobile-nav">
            <li>
              <div className="menu-icon-container " onClick={()=>{
              document.querySelector(".nav-container").classList.toggle("active");
              }}>
                <div className="menu-icon">
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="link-logo"></Link>
            </li>
            <li>
              <Link to="/Bag" className="link-bag"></Link>
            </li>
          </ul>
          <ul className="desktop-nav">
            <li>
              <Link to="/" className="link-logo"></Link>
            </li>
            <li>
              <Link to="/store" className="link-1">
                Store
              </Link>
            </li>
            <li>
              <Link to="/Mac" className="link-2">
                Mac
              </Link>
            </li>
            <li>
              <Link to="/iPad" className="link-3">
                iPad
              </Link>
            </li>
            <li>
              <Link to="/iPhone" className="link-4">
                iPhone
              </Link>
            </li>
            <li>
              <Link to="/Watch" className="link-5">
                Watch
              </Link>
            </li>
            <li>
              <Link to="/Tv & Home" className="link-6">
                Tv & Home
              </Link>
            </li>
            <li>
              <Link to="/iMusic" className="link-7">
                iMusic
              </Link>
            </li>
            <li>
              <Link to="/only on Apple" className="link-8">
                Apple Exclusive
              </Link>
            </li>
            <li>
              <Link to="/Accessories" className="link-9">
                Accessories
              </Link>
            </li>
            <li>
              <Link to="/Support" className="link-9">
                Support
              </Link>
            </li>
            <li>
              <Link to="#" className="link-search"></Link>
            </li>
            <li>
              <Link to="/Bag" className="link-bag"></Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
export default Header;
