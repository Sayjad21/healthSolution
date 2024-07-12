
import React from 'react';
import ExercisePage from './ExercisePage';

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
