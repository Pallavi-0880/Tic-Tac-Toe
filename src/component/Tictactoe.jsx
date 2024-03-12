import { useState } from "react"
import "../CSS/style.css"
import circle from "../assets/circle.png"
import cross from "../assets/cross.png"
let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
const Tictactoe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false)
  let [showDiv, setShowDiv] = useState(false)
  let [win, setWin] = useState("x")
  const handleClick = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src=${cross}>`;
      arr[num] = "x"
      console.log(arr)
      // console.log(index)
      setCount(++count)

    }
    else {
      e.target.innerHTML = `<img src = ${circle}>`;
      arr[num] = "o"
      console.log(arr)
      setCount(++count)

    }
    checkWin()

  }
  const checkWin = () => {
    if (arr[0] === arr[1] && arr[1] === arr[2]) {
      won(arr[2]);
      // console.log("hello")


    }
    else if (arr[3] === arr[4] && arr[4] === arr[5]) {
      won(arr[5])

    }
    else if (arr[6] === arr[7] && arr[7] === arr[8]) {
      won(arr[8]) //\[0, 3, 6],//   [1, 4, 7],//   [2, 5, 8],//   [0, 4, 8],//   [2, 4, 6],

    }
    else if (arr[0] === arr[3] && arr[3] === arr[6]) {
      won(arr[6])
    }
    else if (arr[1] === arr[4] && arr[4] === arr[7]) {
      won(arr[7])
    }
    else if (arr[2] === arr[5] && arr[5] === arr[8]) {
      won(arr[8])
    }
    else if (arr[0] === arr[4] && arr[4] === arr[8]) {
      won(arr[8])
    }
    else if (arr[2] === arr[4] && arr[4] === arr[6]) {
      won(arr[6])
    }
   
  }
  const won = (winner) => {
    console.log(winner)
    setLock(true)
    setShowDiv(true)
    if (win === winner) {
      console.log("X is win")
      setWin("o")
    }
    else {
      console.log("O is win")
    }

  }
  const resetClick =()=>{
    window.location.reload()

  }
  return (<> <div className="playerBox">
    <h2 win={win}>X</h2>
    <h2>O</h2>
  </div>
    {!showDiv ? null
     :win==="x"?
     <div className="result">Congratulation O is winner</div>
     :win!=="x"&& win!=="o"?<div className="result">Draw</div>
    : <div className="result">Congratulation X is winner</div>}
    <div className="board">
      {arr.map((number, index) => {
        return (<div className="boxs" onClick={(e) => { handleClick(e, index) }} ></div>)
      })}
      <button onClick={resetClick}>Reset</button>
    </div>
  </>

  )

}
export default Tictactoe