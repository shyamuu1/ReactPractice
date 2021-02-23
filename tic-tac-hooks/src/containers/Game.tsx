import React from 'react';

type GameContainerProps = {
    children:React.ReactNode;
}

const Game:React.FC<GameContainerProps> = ({children}:GameContainerProps) => {
    return (
        <div className="game">
            {children}
        </div>
    );
}

export default Game;