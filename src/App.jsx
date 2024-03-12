import "./CSS/style.css"
import Tictactoe from "./component/Tictactoe"
function App() {

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>     
      <Tictactoe className="box" />
    </div>
  )
}

export default App
