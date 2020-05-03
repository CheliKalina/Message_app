// import React from 'react';
// import Alert from './components/alert';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
// <h3>I am a title</h3>
// <Alert></Alert>
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
import Alert from "./components/alert";
import Checkbox from "./components/checkbox";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Checkbox>
          <Alert></Alert>
        </Checkbox>
      </header>
    </div>
  );
}

export default App;