import React from 'react';
import { BoardProps } from '../../types/types';
import Square from '../Square Tile/Square';

const Board:React.FC<BoardProps> = (props:BoardProps) => {

    const renderSquare = (index:number) => {
        return (
            <Square current={index} value={props.squares[index]} clicked={props.clicked}/>
        );

    }
    return(
        <div className="game-board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;