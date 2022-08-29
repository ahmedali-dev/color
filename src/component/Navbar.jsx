import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 50) {
        navRef.current.classList.add("activenav");
      } else if (window.scrollY < 50) {
        navRef.current.classList.remove("activenav");
      }
    });
  }, [navRef]);
  return (
    <div className="navbar" ref={navRef}>
      {/*
       *logo
       *navgation
       *navToggle
       */}

      <div className="logo">
        <p>CO</p>
      </div>

      <div className="nav">
        <div className="nav-item">
          <Link to="/palettes" className="nav-item-link">
            Palettes
          </Link>
        </div>

        <div className="nav-item">
          <Link to="/Linear" className="nav-item-link">
            Linear
          </Link>
        </div>
      </div>

      <div className="navToggle">
        <span className="nav-toggle"></span>
        <span className="nav-toggle"></span>
        <span className="nav-toggle"></span>
      </div>
    </div>
  );
};

export default Navbar;
