import "./App.css";

import React from "react";

const App = () => {
  const boxes = Array.from({ length: 7 }, (_, index) => index + 1); // Create 7 boxes

  return (
    <div>
      <div className="box-container">
      {boxes.map((box, index) => (
        <div key={index} className="box">
          Box {box}
        </div>
      ))}
    </div>


    <div className="infinite-scroll">
      <div className="scroll-content">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
      </div>
    </div>
    </div>
    
   
  );
};

export default App;
