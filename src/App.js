import React from 'react';


/*
Line 19:1:  Assign arrow function to a variable before exporting as module default
  import/no-anonymous-default-export
export default () => {
  */

const App=()=>{
  return (
    <div>
      WELCOME
    </div>
  );
};

export default App;
