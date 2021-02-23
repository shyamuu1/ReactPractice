import React, {useState} from 'react';

import './App.css';
import Board from './components/Board/GameBoard';
import Game from './containers/Game';
import { calculateWinner } from './GameConditions/winCondition/WinCondition';

const App:React.FC = () => {
  const gameboard:string[] = Array(9).fill(null);
  const [history, setHistory] = useState([{squares:gameboard}]);
  const [isXNext, setX] = useState<boolean>(true);
  const [turnNumber, setTurn] = useState<number>(0);
  const current = history[history.length]; 
  const winner = calculateWinner(current.squares);

  return (
    <div className="App">
      <Game>
        <Board squares={current.squares} clicked={()=>{}}/>
      </Game>
      
    </div>
  );
}

export default App;
