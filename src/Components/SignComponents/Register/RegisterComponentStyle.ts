import styled from "styled-components";

export const RegisterPanel = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 435px;
  background-color: white;
  margin-top: 20px;
  border-radius: 7px;
  align-items: center;
`

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 75%;
    height: 67%;
    margin-top: 20px;
    text-align: start;
    font-size: 10px;
`

export const RegisterButton = styled.button`
  width: 75%;
  height: 35px;
  background-color: #4299e1;
  border: none;
  outline: none;
  border-radius: 7px;
  color: white;
  margin-top: 25px;
  font-size: 14px;
  font-weight: 600;

  &:active {
    background-color: #3081c4;
    color: white;
  }
`

export const ForLogin = styled.div`
    width: 75%;
    margin-top: 20px;
`

export const MainRegisterTitle = styled.p`
    font-weight: 600;
    font-size: 33px;
`