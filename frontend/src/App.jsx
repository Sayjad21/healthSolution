
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExercisePage from './ExercisePage';
import ExerciseDetails from './ExerciseDetails.js';
import ExerciseRoutine from './ExerciseRoutine.js';
import BloodDonationForm from './BloodDonationForm.js';
import ViewDonor from './ViewDonor.js';

// Import SignUp component and userContext
import SignUp from './components/SignUp';
import { userContext } from './context/context.js';
function App() {
  const [user, setUser] = useState(null);

  //this is temporary state variable
  const [userID, setUserID] = useState(1);
  const [height, setHeight] = useState(166);
  const [weight, setWeight] = useState(66);
  const [age, setAge] = useState(22);
  const [gender, setGender] = useState('male');
  const [bmi, setBmi] = useState(21.3);
  const [userEmail, setUserEmail] = useState('abc@gmail.com');


  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<ExercisePage
          userID={userID}
          height={height}
          weight={weight}
          age={age}
          gender={gender}
          bmi={bmi}
        />} /> 
         <Route path="/ExerciseDetails" element={<ExerciseDetails userID={userID} />} />
        <Route path="/ExerciseRoutine" element={<ExerciseRoutine userID={userID}/>} /> */}
        <Route path="/" element={<BloodDonationForm />} />
        <Route path="/donors" element={<ViewDonor userEmail={userEmail} />} />
      </Routes>
    </Router>
  );
}

export default App;



