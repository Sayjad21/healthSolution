import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../context/context";
import {tokenContext} from '../../context/context';
import { useNavigate } from "react-router-dom";
// import SignUp from '../RegLoginAuth/SignUp';;
// import '../../cssFiles/Signup.css';

// import "../../cssFiles/navbar.css";
import "./css/navbar.css";

// import { userContext} from "../../context/context";

//import signup.jsx from RegLoginAuth folder


const Navbar = () => {
  const userValue = useContext(userContext);
  const tokenValue = useContext(tokenContext);
  // console.log(userValue.user.stats);
  const [signout, setSignout] = React.useState(false);
  const navigate = useNavigate();
  const handleSignOut = () => {
    setSignout(true);
    userValue.setUser(null);
    tokenValue.setToken('');
    navigate('/');
  }
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
                Health Solutions
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
                <Link to="/BloodDonationForm" className="nav-link">
                  Donate Blood
                </Link>
              </li>
              <li>
                <Link to="/ExercisePage" className="nav-link">
                  Exercise
                </Link>
              </li>
              <li>
                <Link to="/NutritionCalc" className="nav-link">
                  Nutricalc
                </Link>
              </li>
              <li>
                <Link to="/FindDocHos" className="nav-link">
                  Doctor & Hospital
                </Link>
              </li>

              <li>
                <Link to="/Vaccination" className="nav-link">
                  Vaccine
                </Link>
              </li>
              <li>
                <Link to="/diagnosis" className="nav-link">
                  Diagnosis
                </Link>
              </li>

              <li><Link className="nav-link" target="_self" to="/AiChatBot">Chat BOT</Link></li>

              {userValue.user && userValue.user.stats ==='admin' &&  <li>
                <Link to="/addDoctor" className="nav-link">
                  Add Doctor
                </Link>
              </li>}

              <li>
                {userValue.user ? (
                  <li className="nav-item dropdown">
                    <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <div>{userValue.user.name}</div>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                    {/* <li><Link className="nav-link" target="_self" to="/AiChatBot">Chat BOT</Link></li> */}
                      <button className="dropdown-item" onClick={handleSignOut}>Sign Out</button>
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
