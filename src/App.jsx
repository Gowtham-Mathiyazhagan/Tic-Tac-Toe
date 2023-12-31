import React from "react";
import "./App.css";
import { useState} from "react";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

function App() {
  let [XorO, setXorO] = useState(1);
   let player1= XorO ? { textDecoration: "underline wavy #a010b3 1px"} : null
  let player2= XorO ? null : { textDecoration: "underline wavy #a010b3 1px"}
  function handleClick(e) {
    let box=e.target
    if (box.getAttribute("class") == "box") {
       box.classList.add(`${XorO}`);
      let div = e.target.firstElementChild;
      XorO ? div.classList.add("x") :  div.classList.add("o") ;
      XorO ? setXorO(0) : setXorO(1)
    }
  }
  function handleReset(){
   let x= document.querySelectorAll('.x')
    let o=document.querySelectorAll('.o')
    let box=document.querySelectorAll('.box') 
    x.forEach(val=> val.removeAttribute('class'))
    o.forEach(val=> val.removeAttribute('class'))
    box.forEach(val=> val.classList.remove('1'))
    box.forEach(val=> val.classList.remove('0'))
  }
  return (
    <div className="grid-container">
      <div className="title">
        <div className="title-name">Tic Tac Toe</div>
      </div>
      <div className="players">
        <div className="player1" style={player1}>Player-1 : 99</div>
        <div className="tie">Tie :</div>
        <div className="player2" style={player2}>Player-2 :</div>
      </div>
      <div className="main-container" onClick={handleClick}>
        <div className="box">
          <div></div>
        </div>
        <div className="box">
          <div></div>
        </div>
        <div className="box">
          <div></div>
        </div>
        <div className="box">
          <div></div>
        </div>
        <div className="box">
          <div></div>
        </div>
        <div className="box">
          <div></div>
        </div>
        <div className="box">
          <div></div>
        </div>
        <div className="box">
          <div></div>
        </div>
        <div className="box">
          <div></div>
        </div>
      </div>
      <div className="btn">
        <button onClick={handleReset}>reset</button>
      </div>
      <div className="copyrights">
        <p><i class="bi bi-c-circle"></i> Designed & Developed By Gowtham-Mathiyazhagan</p>
      </div>
    </div>
  );
}

export default App;
