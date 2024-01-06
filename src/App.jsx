import React from "react";
import "./App.css";
import { useState, useEffect} from "react";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import X from "./assets/X.wav"
import O from "./assets/O.wav"
import winn from "./assets/win.wav"


function Box({value,array,onClick}){
  let classname=null
  if(array[value]!=null)
  {
    array[value]=="x" ? classname='x' : classname='o'
  }
  
  return(
    <div className="box" onClick={onClick}>
    <div  className={classname}></div>
    </div>
  )
}
function App() {
 const [arr, setArr] = useState(Array(9).fill(null)) 
 const [XorO, setXorO] = useState(1)
 const [win, setWin] = useState({x:0,o:0,tie:0,count:0})
 console.log(win.count)
 useEffect(() => {
if(win.count==9)
{
 if(winner(arr)==null)
 {
  setWin({...win,tie:win.tie+1})
 }
}
  if (winner(arr)) {
    const winnerVal = winner(arr);
    const winnerArr = arr.map((val, i) =>
      winnerVal.includes(i) ? val : null
    );
    if (JSON.stringify(winnerArr) !== JSON.stringify(arr)) {
    console.log(winnerArr)
       arr[winnerVal[0]] == 'x' ? setWin({...win,x:win.x+1}) : setWin({...win,o:win.o+1})
      setArr(winnerArr);
      new Audio(winn).play()
    }
  }
}, [arr]);
 let play = (XorO-1) % 2==0 
 let player1= play ? { textDecoration: "underline wavy #a010b3 1px"} : null
 let player2= play ? null : { textDecoration: "underline wavy #a010b3 1px"}
  function handleClick(i) {
    if(arr[i]!=null || winner(arr) )
    {
      return;
    }
   setWin({...win,count:win.count+1})
    let silceVal= arr.slice()
    // silceVal[i]=XorO % 2 == 0 ? 'o' : 'x'
    if(XorO%2==0)
    {
      new Audio(O).play()
      silceVal[i]='o'
    }
    else{
      new Audio(X).play()
      silceVal[i]='x'
    }
    setArr(silceVal)
    setXorO(XorO+1)
    
    }
  
  function handleReset(){
    setArr(Array(9).fill(null))
    setXorO(1)
    setWin({...win,count:0})
  }
  
  return (
    <div className="grid-container">
      <div className="title">
        <div className="title-name">Tic Tac Toe</div>
      </div>
      <div className="players">
        <div className="player1" style={player1}>Player-X : {win.x}</div>
        <div className="tie">Tie : {win.tie}</div>
        <div className="player2" style={player2}>Player-O : {win.o}</div>
      </div>
      <div className="main-container">
       <Box  value={0}  array={arr} onClick={()=>handleClick(0)} />
       <Box  value={1}  array={arr} onClick={()=>handleClick(1)} />
       <Box  value={2}  array={arr} onClick={()=>handleClick(2)} />
       <Box  value={3}  array={arr} onClick={()=>handleClick(3)} />
       <Box  value={4}  array={arr} onClick={()=>handleClick(4)} />
       <Box  value={5}  array={arr} onClick={()=>handleClick(5)} />
       <Box  value={6}  array={arr} onClick={()=>handleClick(6)} />
       <Box  value={7}  array={arr} onClick={()=>handleClick(7)} />
       <Box  value={8}  array={arr} onClick={()=>handleClick(8)} />
      </div>
       <div className="btn">
        <button onClick={handleReset}>reset</button>
      </div> 
      <div className="copyrights">
        <p><i className="bi bi-c-circle"></i> Designed & Developed By Gowtham-Mathiyazhagan</p>
      </div>
    </div>
  );
}
function winner(arr) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      
      return lines[i];
    }
  }
  return null;
}

export default App;
