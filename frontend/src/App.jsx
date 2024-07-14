
import React from 'react';
import ExercisePage from './ExercisePage';
import { useState } from 'react';
import { userContext, tokenContext } from './context/context';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserLifeInfo from './components/UserLifeInfo';
import Verification from './components/Verification';
import FinalAuthenticate from './components/FinalAuthenticate';


function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');
  return (
    <div className="App">
      <userContext.Provider value={{ user, setUser }}>
        <tokenContext.Provider value={{ token, setToken }}>
          {/* <SignUp/> */}

          <div class="container text-center">
            <div class="row align-items-center">
              <div class="col">
              <SignUp />
              </div>
              <div class="col">
              <Login />
              </div>
              <div class="col">
              <Verification />
              </div>
              <div class="col">
              <FinalAuthenticate />
              </div>
            </div>
          </div>
          
          
          
          <UserLifeInfo />
        </tokenContext.Provider>
      </userContext.Provider>

    </div>
  );
}

export default App;
