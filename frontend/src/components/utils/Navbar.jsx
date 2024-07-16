import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../context/context";
// import SignUp from '../RegLoginAuth/SignUp';;
// import '../../cssFiles/Signup.css';
import "../../cssFiles/navbar.css";

// import { userContext} from "../../context/context";

//import signup.jsx from RegLoginAuth folder


const Navbar = () => {
  const userValue = useContext(userContext);
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
              {/* <i
                className="fa-brands fa-slack fa-2x"
                style={{ color: "white", padding: "10px" }}
              ></i> */}
              <div
                className="navbar-brand"
                style={{ color: "white", fontSize: "20px", padding: "10px" }}
              >
                Health Guru
              </div>
            </Link>

            <input type="checkbox" id="check" />
            <span className="menu">
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
                <Link to="/FindDocHos" className="nav-link">
                  Doctor & Hospital
                </Link>
                </li>

              <li>
                {userValue.user ? (
                  <li className="nav-item dropdown">
                  <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <div>{userValue.user.name}</div>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">Action1</a></li>
                    <li><a className="dropdown-item" href="#">Action2</a></li>
                    <li><Link className="nav-link" target="_self" to="/UserLifeLog">User Log</Link></li>
                  </ul>
                </li>
                ) : (
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <li>
                      <Link to="/signup" className="nav-link" target="_self">
                        Sign Up
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" className="nav-link" target="_self">
                        Login
                      </Link>
                    </li>
                  </div>
                )}
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
