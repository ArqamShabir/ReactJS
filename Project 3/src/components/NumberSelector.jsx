import React from 'react';
import { styled } from 'styled-components';

function NumberSelector({setError,error,num,selNum}) {
  const arrayNum = [1,2,3,4,5,6];  

  const errorHandler = (value) => {
        selNum(value);
        setError("");
  }

  return (
    <>
        <NumberContainer>
            <p className='error'>{error}</p>
            <div className='flex'>
                {arrayNum.map((value,i) => 
                (<Box isSelected={value === num} onClick={() => errorHandler(value)} key={i}>{value}</Box>)
                )}
            </div>
            <p>
                Select Number
            </p>
        </NumberContainer>
    </>
  )
}

const NumberContainer = styled.div`
    display : flex;
    align-items:end;
    flex-direction:column;

    .flex{
        display:flex;
        gap:24px
    }
    p{
        font-size:24px;
        font-weight:700;
        padding-top:10px;
    }
    .error{
        color:red;
        margin-bottom:10px;
    }
`;

const Box = styled.div`
    height:72px;
    width:72px;
    border:1px solid black;
    display:grid;
    place-items:center;
    font-size:24px;
    font-weight:700;
    background: ${(props)=> (props.isSelected ? "black" : "white")};
    color: ${(props)=> (!props.isSelected ? "black" : "white")};
    cursor:pointer;
`;

export default NumberSelector;