import { useState } from "react";
import { styled } from "styled-components";
import { Button, OutlinedButton } from "./Button";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Rules from "./Rules";
import TotalScore from "./TotalScore";

const GamePlay = () => {
    const [dice,setdice] = useState(1);
    const [num,selNum] = useState();
    const [score,setscore] = useState(0);
    const [error,setError] = useState("");
    const [rule,setrule] = useState(false);

    const toggleRule = () => {
        setrule((prev) => !prev);
    }

    const resetScore = () => {
        setscore(0);
    }
    
    const randomNumber = (min,max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }
    
    const rollDice = () => {
        if(!num){
            setError("You have not selected any number");
            return;
        }
        setdice((prev) => randnum);

        const randnum = randomNumber(1,7);

        if(num === randnum)
        {
            setscore((prev) => prev + randnum);
        }
        else{
            setscore((prev) => prev - 2);
        }

        selNum(undefined);
    }

    
    return(
        <>
        <MainContainer>
            <div className="top_section">
            <TotalScore score={score} />
            <NumberSelector setError={setError} error = {error} num={num} selNum={selNum} />
            </div>
            <RollDice dice={dice} rollDice={rollDice}/>
            <div className="btn_flex">
            <OutlinedButton onClick={resetScore}>Rest Score</OutlinedButton>
            <Button onClick={toggleRule}>How to Play</Button>
            </div>
            {rule && <Rules/>}
        </MainContainer>
        </>
    );
}

const MainContainer = styled.main`
    padding-top:70px;
    .top_section{
    display:flex;
    justify-content:space-around;
    align-items:center;
    }
    .btn_flex{
        display:flex;
        flex-direction:column;
        gap:10px;
        margin-top:40px;
        font-size:36px;
        align-items:center;
        justify-content:center;
    }
`;

export default GamePlay;
