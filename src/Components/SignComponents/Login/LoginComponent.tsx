import React, {ChangeEvent, useState} from 'react';
import {
    InputTitle,
    InputsWrapper,
    LoginPanel,
    LoginPanelWrapper,
    MainLoginTitle,
    MainLoginWrapper,
    SecondaryLoginText, InputWrapper, LoginButton, ForRegister
} from "./LoginComponentStyle";
import {Colored, Input} from "../../Global";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export const LoginComponent = () => {

    const navigate = useNavigate()

    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const OnChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }

    const OnChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const Login = async () => {
        try{
            const response = await axios.post("http://localhost:5555/login", {
                "login": login,
                "password": password
            })

            if(response.data.IsLogin === true){
                navigate("/account")
            }
        }catch{
            console.log("some error")
        }
    }

    return (
        <MainLoginWrapper>
            <LoginPanelWrapper>
                <MainLoginTitle>Sign in to your account</MainLoginTitle>
                <SecondaryLoginText>to enjoy all of our cool <Colored color={"#4299e1"}>features</Colored> ✌</SecondaryLoginText>

                <LoginPanel>
                    <InputsWrapper>
                        <InputWrapper>
                            <InputTitle>Login</InputTitle>
                            <Input value={login} onChange={OnChangeLogin} type="text"/>
                        </InputWrapper>

                        <InputWrapper>
                            <InputTitle>Password</InputTitle>
                            <Input value={password} onChange={OnChangePassword} type="password"/>
                        </InputWrapper>
                    </InputsWrapper>
                    <LoginButton onClick={Login}>Login</LoginButton>
                    <ForRegister>Dont have account? <Link style={{textDecoration: "none"}} to={"/register"}><Colored color={"#4299e1"}>Register</Colored></Link> </ForRegister>
                </LoginPanel>
            </LoginPanelWrapper>
        </MainLoginWrapper>
    );
};