import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ExercisePage from './ExercisePage';

import { userContext, tokenContext } from './context/context';
import SignUp from './components/RegLoginAuth/SignUp';
import Login from './components/RegLoginAuth/Login';
import UserLifeInfo from './components/RegLoginAuth/UserLifeInfo';
import Verification from './components/RegLoginAuth/Verification';
import FinalAuthenticate from './components/RegLoginAuth/FinalAuthenticate';
import Home from './components/Home';
import Diet from './components/diet/Diet';
import MealPlanner from './components/survey/mealplanner';
import Recipe from './components/meal/recipe';

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  return (
    <div className="App">
      <userContext.Provider value={{ user, setUser }}>
        <tokenContext.Provider value={{ token, setToken }}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/diet" element={<Diet />} />
              <Route exact path="/meal" element={<MealPlanner />} />
              <Route exact path="/recipe" element={<Recipe />} />
              <Route exact path="/exercise" element={<ExercisePage />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/UserLifeLog" element ={<UserLifeInfo />} />
              {/* Add more routes as needed */}
            </Routes>
          </Router>

          {/* <div className="container text-center">
            <div className="row align-items-center">
              <div className="col">
                <SignUp />
              </div>
              <div className="col">
                <Login />
              </div>
              <div className="col">
                <Verification />
              </div>
              <div className="col">
                <FinalAuthenticate />
              </div>
            </div>
          </div> */}

          {/* <UserLifeInfo /> */}
        </tokenContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
