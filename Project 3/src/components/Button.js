import { styled } from "styled-components";

export const Button = styled.button`
color:#fff;
padding: 10px 18px;
border-radius: 5px;
background: #000;
border:none;
min-width:220px;
font-size:16px;
cursor:pointer;
border:1px solid transparent;
transition : 0.4s background ease-in;

&:hover{
    border:1px solid #000;
    transition : 0.3s background ease-in;
    color:#000;
    background:#fff;
}
`;

export const OutlinedButton = styled(Button)`
color:#000;
background: transparent;
border:1px solid #000;

&:hover{
    border:1px solid transparent;
    color:#fff;
    background:#000;
}
`;

