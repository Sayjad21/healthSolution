import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./css/navbar.css";

{/* <Route exact path="/" element={<Home />} />
<Route exact path="/diet" element={<Diet />} />
<Route exact path="/exercise" element={<ExercisePage />} />
<Route exact path="/login" element={<Login />} />
<Route exact path="/signup" element={<SignUp />} /> */}

const Navbar = () => {
  return (
    <Fragment>
      <div>
        <nav>
          <ul className="nav-bar">
            <Link
              to="/"
              className="nav-link"
              style={{
                display: "flex",
              }}
            >
              <i
                className="fa-brands fa-slack fa-2x"
                style={{ color: "white", padding: "10px" }}
              ></i>
              <div
                className="navbar-brand"
                style={{ color: "white", fontSize: "20px", padding: "10px" }}
              >
                Health Guru
              </div>
            </Link>

            <input type="checkbox" id="check" />
            <span className="menu">
              {/* Menu items */}
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/diet" className="nav-link">
                  Food
                </Link>
              </li>
              <li>
                <Link to="/exercize" className="nav-link">
                  Exercize
                </Link>
              </li>
              <li>
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link">
                    Login
                </Link>
              </li>
              <label htmlFor="check" className="close-menu">
                <i className="fas fa-times"></i>
              </label>
            </span>
            <label htmlFor="check" className="open-menu">
              <i className="fas fa-bars"></i>
            </label>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
