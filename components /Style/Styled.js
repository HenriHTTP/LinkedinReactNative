import React from 'react';
import styled from 'styled-components/native';
import {Text,View,Button,TouchableOpacity,TextInput,StatusBar} from 'react-native';


export  const TitleDefault = styled.Text `
        color:white;
        font-size:40px;   
        text-align:center;
        padding:10px; 
        opacity :1;
        margin:auto;
`
export  const SubtitleDefault = styled.Text `
        color:white;
        font-size:20px;   
        text-align:center;
        padding:10px; 
        opacity :0.8;
        margin:auto;
`
export  const NaVDefault = styled.View `  
        height:200px; 
        display: flex;
        justify-content:center;
`
export  const ViewDefault  = styled.View ` 
        justify-content: space-between;
        flex-direction:column; 
        flex:1;
        background-color:white;
        border-top-left-radius:20px; 
        border-top-right-radius:20px; 


`

export const ButtonContainer = styled.TouchableOpacity`
        margin:auto;
        width: 300px;
        padding: 5px;
        border-radius:5px;
        background-color:#5187fc;
        margin-top:10px;
        margin-bottom:10px;



`

export const ButtonText = styled.Text`
        font-size: 20px;
        text-align: center;
        color:white; 
`
export const LabelDefault = styled.Text`
        font-size: 15px;
        text-align: center;
        color:black; 
        opacity: 0.5;
        width:300px;
        margin:auto;
        text-align:left;
        padding:20px; 
`
export const  InputUser = styled.TextInput `
        width:280px;
        padding: 5px;
        background-color:whitesmoke;   
        margin:auto;   
        border-radius:5px;   
        height: 30px;
        color:black;
        opacity:0.7; 
        
`
export  const ViemForm = styled.View `
        background-color:white;
        border-top-left-radius:20px; 
        border-top-right-radius:20px; 


`
export  const StatusBarDefault = styled.StatusBar`
        background-color:#5187fc;
      
`
export  const LinkButton = styled.TouchableOpacity`
        opacity:0.4; 
        width:300px; 
        text-align: left;
        margin:auto;

`
export const LinkButtonText = styled.Text`
        font-size: 15px;
        text-align: left; 
        color:black;
        text-decoration: underline;
        padding:20px;


`
export const ButtonView =  styled.View `
        height:400px;
        display:flex;
        justify-content:center;

`
export const NavBar = styled.View `
        height:75px;   
        background-color:white;
        display:flex; 
        justify-content:space-around;   
        flex-direction:row;   
`
export const SeachInput =  styled.TextInput`
        width:280px;
        background-color:whitesmoke;
        height: 30px;
        margin:auto;
        padding:5px;
        border-top-left-radius:5px; 
        border-bottom-left-radius:5px; 
        color:gray;
        text-decoration:none;
`
export const TextNavbar = styled.Text `
        color:gray;   
        margin:auto;
        opacity:0.3;
`
export const PressIcons =styled.TouchableOpacity`
        width: 55px;
`
export const SeachButton =styled.TouchableOpacity`
        width: 30px;
        background-color:whitesmoke;
        height:30px;
        margin:auto;
        display:flex; 
        justify-content:center;
        border-top-right-radius:5px; 
        border-bottom-right-radius:5px; 
`
export  const SeachIcon = styled.Text`
        color:white;
        opacity:0.3;
        color:gray;  

`

export  const ContainerDefault = styled.View `
        background-color:#5187fc;
        flex:1; 
    


`