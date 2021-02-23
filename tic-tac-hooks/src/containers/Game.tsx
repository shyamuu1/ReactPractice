import React from 'react';
import { GameContainerProps } from '../types/types';

const Game:React.FC<GameContainerProps> = ({children}:GameContainerProps) => {
    return (
        <div className="game">
            {children}
        </div>
    );
}

export default Game;