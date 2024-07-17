import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ExercisePage from './ExercisePage';

import { userContext, tokenContext } from './context/context';
import SignUp from './components/RegLoginAuth/SignUp';
import Login from './components/RegLoginAuth/Login';
import UserLifeInfo from './components/RegLoginAuth/UserLifeInfo';
import Verification from './components/RegLoginAuth/Verification';
import FinalAuthenticate from './components/RegLoginAuth/FinalAuthenticate';
import SearchFilter from './components/Search&Filter/SearchFilter';

import Home from './components/Home';
import Diet from './components/diet/Diet';
import MealPlanner from './components/survey/mealplanner';
import Recipe from './components/meal/recipe';
import Populate from './components/admin/populate';
import Blog from './components/blog/blog';

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
              <Route exact path="/populate" element={<Populate />} />
              <Route exact path="/exercise" element={<ExercisePage />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/UserLifeLog" element ={<UserLifeInfo />} />
              <Route exact path="/FindDocHos" element={<SearchFilter /> } />
              <Route exact path="/blog" element={<Blog />} />
              {/* Add more routes as needed */}
            </Routes>
          </Router>
        </tokenContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
