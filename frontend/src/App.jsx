import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



import ExercisePage from './components/exercise/ExercisePage.js';

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
//-import ExercisePage from './components/exercise/ExercisePage.js';
import ExerciseDetails from './components/exercise/ExerciseDetails.js';
import ExerciseRoutine from './components/exercise/ExerciseRoutine.js';
import BloodDonationForm from './components/blood/BloodDonationForm.js';
import ViewDonor from './components/blood/ViewDonor.js';
import NutritionCalc from './components/nutrition/NutritionCalc.js';



function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');



  //this is temporary state variable
  // const [userID, setUserID] = useState(1);
  // const [height, setHeight] = useState(166);
  // const [weight, setWeight] = useState(66);
  // const [age, setAge] = useState(22);
  // const [gender, setGender] = useState('male');
  // const [bmi, setBmi] = useState(21.3);
  // const [userEmail, setUserEmail] = useState('abc@gmail.com');


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
              <Route exact path="/UserLifeLog" element={<UserLifeInfo />} />


              {/* sayjad */}

              {/* Add more routes as needed */}

              <Route path="/ExercisePage" element={<ExercisePage
                // userID={userID}
                // height={height}
                // weight={weight}
                // age={age}
                // gender={gender}
                // bmi={bmi}
              />} />
              <Route path="/ExerciseDetails" element={<ExerciseDetails />} />
              <Route path="/ExerciseRoutine" element={<ExerciseRoutine />} />
              <Route path="/BloodDonationForm" element={<BloodDonationForm />} />
              <Route path ="/NutritionCalc" element={<NutritionCalc />} />
              <Route path="/donors" element={<ViewDonor  />} />



            </Routes>
          </Router>



          {/* <UserLifeInfo /> */}
        </tokenContext.Provider>
      </userContext.Provider>
    </div>
    
  );
}

export default App;



