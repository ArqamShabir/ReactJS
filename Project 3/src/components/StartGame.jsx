import styled from 'styled-components';
import { Button } from './Button';

const StartGame = ({toggle}) => {
    return (
        <>
            <Component>
                <div>
                <img src='/images/dices 1.png' />
                </div>
                <div  className='content'>
                    <h1>Dice Game</h1>
                    <Button onClick={toggle}>Play Now</Button>
                </div>
            </Component>
        </>
    );
}

const Component = styled.div`
        max-width:1180px;
        display:flex;
        align-items:center;
        height:100vh;
        margin:0 auto;

        .content h1{
            font-size:96px;
            white-space:nowrap;
        }
`;

export default StartGame;