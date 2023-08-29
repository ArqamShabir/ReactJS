import styled from 'styled-components';

function RollDice({dice,rollDice}) {

  return (
    <DiceContainer>
        <div onClick={rollDice} className='dice'>
            <img src={`/images/dice_${dice}.png`} alt="Dice 1"/>
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

const DiceContainer = styled.div`
    display:flex;
    align-items:center;
    margin-top:58px;
    flex-direction:column;

    .dice {
        cursor:pointer;
    }
    p{
        font-size:24px;
    }
`;

export default RollDice;