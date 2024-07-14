import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { userContext } from './context/context';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ExercisePage from './ExercisePage';

import Home from './components/Home';
import Diet from './components/diet/Diet';
import MealPlanner from './components/survey/mealplanner';
import Recipe from './components/meal/recipe';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <userContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/diet" element={<Diet />} />
            <Route exact path="/meal" element={<MealPlanner />} />
            <Route exact path="/recipe" element={<Recipe />} />
            <Route exact path="/exercise" element={<ExercisePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            {/* Add more routes as needed */}
          </Routes>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;


// import React from 'react';
// import ExercisePage from './ExercisePage';
// import React, { useState } from 'react';

// import { userContext } from './context/context';
// import SignUp from './components/SignUp';
// import Login from './components/Login';



// function App() {
//   const [user,setUser] = useState(null);
//   return (
//     <div className="App">
//       <userContext.Provider value={{user,setUser}}>
//         {/* <SignUp/> */}
//         <Login/>
//       </userContext.Provider>
      
//     </div>
//   );
// }

// export default App;
