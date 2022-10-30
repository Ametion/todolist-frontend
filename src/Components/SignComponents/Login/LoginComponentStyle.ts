import styled from "styled-components";

export const MainLoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f7fafc;
`

export const LoginPanelWrapper = styled.div`
    width: 40%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainLoginTitle = styled.p`
    font-weight: 600;
    font-size: 40px;
`

export const SecondaryLoginText = styled.p`
    font-weight: 600;
    font-size: 20px;
`

export const LoginPanel = styled.div`
    display: flex;
    flex-direction: column;
    height: 350px;
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
    height: 50%;
    margin-top: 20px;
    text-align: start;
    font-size: 10px;
`

export const InputWrapper = styled.div`   
    display: flex;
    flex-direction: column;
`

export const InputTitle = styled.p`
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: 200;
`

export const LoginButton = styled.button`
  width: 75%;
  height: 35px;
  background-color: #4299e1;
  border: none;
  outline: none;
  border-radius: 7px;
  color: white;
  margin-top: 30px;
  font-size: 14px;
  font-weight: 600;

  &:active {
    background-color: #3081c4;
    color: white;
  }
`

export const ForRegister = styled.div`
    width: 75%;
  margin-top: 20px;
`