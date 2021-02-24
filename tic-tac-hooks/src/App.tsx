import React, {useState} from 'react';

import './App.css';
import Board from './components/Board/GameBoard';
import Turnlist from './components/TurnList/Turnlist';
import Game from './containers/Game';
import { calculateWinner } from './GameConditions/winCondition/WinCondition';

const App:React.FC = () => {
  const gameboard:string[] = Array(9).fill(null);
  const [history, setHistory] = useState([{squares:gameboard}]);
  const [isXNext, setX] = useState<boolean>(true);
  const [turnNumber, setTurn] = useState<number>(0);
  const current = history[turnNumber];
  const winner = calculateWinner(current.squares);

  let status = (winner)? "Winner: "+winner: "Next player "+(isXNext ? "X":"O");

  const handleClick = (index:number) => {
    const current = history[history.length -1];
    const squares = current.squares.slice(0, turnNumber+1);
    if(calculateWinner(squares) || squares[index]){
        return;
    }
    squares[index] = isXNext ? "X":"O";
    setHistory([...history, {squares:squares}])
    setTurn(history.length);
    setX(!isXNext);
}

const jumpTo = (step:number) => {
  setTurn(step);
  setX((turnNumber% 2) === 0);
}

const turnList = history.map((currentMove, idx)=> {
  return (
    <ol>
      <Turnlist move={idx} Jump={() => jumpTo(idx)} />
    </ol>
  )
});


  return (
    <div className="App">
      <Game>
        <Board squares={current.squares} clicked={(index:number)=>handleClick(index)}/>
      </Game>
      <div className="game-info">
          <div>{status}</div>
          {turnList}
        </div>
    </div>
  );
}

export default App;
