
import React from 'react';
import ExercisePage from './ExercisePage';
import React, { useState } from 'react';
import { userContext } from './context/context';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  const [user,setUser] = useState(null);
  return (
    <div className="App">
      <userContext.Provider value={{user,setUser}}>
        {/* <SignUp/> */}
        <Login/>
      </userContext.Provider>
      
    </div>
  );
}

export default App;
