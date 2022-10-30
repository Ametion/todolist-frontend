import styled from "styled-components";

export const Colored = styled.text`
    color: ${props => props.color};
    border: none;
    text-decoration: none;
  
`

export const Input = styled.input`
  border: 0.5px solid #c7c4c4;
  height: 40px;
  border-radius: 7px;
  padding: 10px;
  font-weight: 400;

  &:focus {
    outline: none;
  }
`

export const InputError = styled.div<{ display: boolean }>`
    display: ${props => props.display ? "block" : "none"};
    font-size: 17px;
    text-align: center;
`