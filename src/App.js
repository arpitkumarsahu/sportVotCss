import "./App.css";

import React from "react";

const App = () => {
  const boxes = Array.from({ length: 7 }, (_, index) => index + 1); // Create 7 boxes

  return (
    <div className="box-container">
      {boxes.map((box, index) => (
        <div key={index} className="box">
          Box {box}
        </div>
      ))}
    </div>
   
  );
};

export default App;
