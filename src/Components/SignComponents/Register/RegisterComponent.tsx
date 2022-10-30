import React, {ChangeEvent, useState} from 'react';
import {
    InputTitle, InputWrapper,
    LoginPanelWrapper,
    MainLoginWrapper,
    SecondaryLoginText
} from "../Login/LoginComponentStyle";
import {Colored, Input, InputError} from "../../Global";
import {Link, useNavigate} from "react-router-dom";
import {RegisterButton, RegisterPanel, InputsWrapper, ForLogin, MainRegisterTitle} from "./RegisterComponentStyle";
import axios from "axios";

export const RegisterComponent = () => {

    const navigate = useNavigate()

    const [firstName, setFirstName] = useState<string>("")
    const [secondName, setSecondName] = useState<string>("")
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [firstNameError, setFirstNameError] = useState<boolean>(false)
    const [secondNameError, setSecondNameError] = useState<boolean>(false)
    const [loginError, setLoginError] = useState<boolean>(false)
    const [passwordError, setPasswordError] = useState<boolean>(false)

    const OnChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length > 25){
            setFirstNameError(true)
            return
        }

        setFirstNameError(false)
        setFirstName(e.target.value)
    }

    const OnChangeSecondName = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length > 25){
            setSecondNameError(true)
            return
        }

        setSecondNameError(false)
        setSecondName(e.target.value)
    }

    const OnChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length > 15){
            setLoginError(true)
            return
        }

        setLoginError(false)
        setLogin(e.target.value)
    }

    const OnChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length > 16){
            setPasswordError(true)
            return
        }

        setPasswordError(false)
        setPassword(e.target.value)
    }

    const Register = async () => {
        try{
            const response = await axios.post("http://localhost:5555/register", {
                "firstName": firstName,
                "secondName": secondName,
                "login": login,
                "password": password
            })

            navigate("/login")
        }catch{
            console.log("error while logging")
        }
    }

    return (
        <MainLoginWrapper>
            <LoginPanelWrapper>
                <MainRegisterTitle>Sign up to out todo service</MainRegisterTitle>
                <SecondaryLoginText>to enjoy all of our cool <Colored color={"#4299e1"}>features</Colored> ✌</SecondaryLoginText>
                <RegisterPanel>
                    <InputsWrapper>
                        <InputWrapper>
                            <InputTitle>First Name</InputTitle>
                            <Input value={firstName} onChange={OnChangeFirstName} type="text"/>
                            <InputError display={firstNameError}><Colored color={"red"}>Too much symbol in first name</Colored></InputError>
                        </InputWrapper>

                        <InputWrapper>
                            <InputTitle>Second Name</InputTitle>
                            <Input value={secondName} onChange={OnChangeSecondName} type="text"/>
                            <InputError display={secondNameError}><Colored color={"red"}>Too much symbol in second name</Colored></InputError>
                        </InputWrapper>

                        <InputWrapper>
                            <InputTitle>Login</InputTitle>
                            <Input value={login} onChange={OnChangeLogin} type="text"/>
                            <InputError display={loginError}><Colored color={"red"}>Too much symbol in login</Colored></InputError>
                        </InputWrapper>

                        <InputWrapper>
                            <InputTitle>Password</InputTitle>
                            <Input value={password} onChange={OnChangePassword} type="password"/>
                            <InputError display={passwordError}><Colored color={"red"}>Too much symbol in password</Colored></InputError>
                        </InputWrapper>
                    </InputsWrapper>
                    <RegisterButton onClick={Register}>Register</RegisterButton>
                    <ForLogin>Already have account? <Link style={{textDecoration: "none"}} to={"/login"}><Colored color={"#4299e1"}>Login!</Colored></Link> </ForLogin>
                </RegisterPanel>
            </LoginPanelWrapper>
        </MainLoginWrapper>
    );
};