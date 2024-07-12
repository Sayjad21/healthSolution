
import React, { useState } from 'react';
import { userContext } from './context/context';
import SignUp from './components/SignUp';


function App() {
  const [user,setUser] = useState(null);
  return (
    <div className="App">
      <userContext.Provider value={{user,setUser}}>
        <SignUp/>
      </userContext.Provider>
      
    </div>
  );
}

export default App;
