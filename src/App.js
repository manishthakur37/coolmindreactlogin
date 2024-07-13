import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  const title = "cool mind code"
  return (
    // <div>
    // <h1>
    // Cool Mind
    // </h1>
    // <h2>
    // Learn Code
    // </h2>
    // </div>
    // [
    //   <h1>
    //   hi cool mind code
    //   </h1>,
    //   <h2>
    //   how to learn cool mind code
    //   </h2>
    // ]

    // <React.Fragment>
    //     <h1>
    //    hi.... react  sikhni hai 
    //     </h1>
    //     <h2>
    //     cool mind guys
    //     </h2>
    //     <h3>
    //     jaldi learn karnege
    //     </h3>
    // </React.Fragment>

    <React.Fragment>
    <h1> New Name = {title} </h1> 
    </React.Fragment>
  );
}

export default App;
