import { styled } from "styled-components";

function Rules() {
  return (
    <>
        <RulesContainer>
            <h3>How to play dice game</h3>
            <h5>Select any number</h5>
            <h5>Click on dice image</h5>
            <h5>after click on  dice  if selected number is equal to dice number you will get same point as dice </h5>
            <h5>if you get wrong guess then  2 point will be dedcuted </h5>          
        </RulesContainer>
    </>
  )
}

const RulesContainer = styled.div`
display: flex;
padding: 20px;
flex-direction: column;
align-items: flex-start;
gap: 24px;
background: #FBF1F1;
max-width:794px;
margin:40px auto;
h5{
    line-height:0.5;
    font-weight:500;
}
`;

export default Rules;