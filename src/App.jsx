import React from "react";
import "./App.css";
//XO
function App() {
  return (
    <>
    <div className="title">
      <div className="title-name">Tic Tac Toe</div> 
    </div>
    <div className="players">
      <div className="player1">Player-1 :</div>
      <div className="player2">Player-2 :</div>
    </div>
    <div className="main-container">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
    </>
  );
}

export default App;
