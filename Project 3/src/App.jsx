import React, { useState } from 'react';
import GamePlay from './components/GamePlay';
import StartGame from './components/StartGame';


const App = () => {
    const [gameState,setGameState] = useState(false);
    const toggleFunc = () => {
      setGameState((prev) => !prev);
    }
    return (
        <>
    {gameState ? <GamePlay/> : <StartGame toggle={toggleFunc}/>}
        </>
    )
};
export default App;
