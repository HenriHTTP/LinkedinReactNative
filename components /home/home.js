import React from 'react';
import { 
    TitleDefault,
    ViewDefault,
    NaVDefault,
    ButtonContainer,
    ButtonText,
    InputUser,
    StatusBarDefault,
    ViemForm,
    LabelDefault,
    LinkButton,
    LinkButtonText,
    ButtonView,
} from '../Style/Styled';
import {Alert} from 'react-native';
import  Icon from 'react-native-vector-icons/AntDesign'



export default function home() {
    let  msg = () => { 
        Alert.alert('true')
    }
    return(
        <>
        <StatusBarDefault/>
        <NaVDefault>
            <TitleDefault> <Icon name='linkedin-square' size={70}/> </TitleDefault>
        </NaVDefault>
        <ViewDefault>
            <ViemForm>
                <LabelDefault>E-mail</LabelDefault>
            <InputUser/>
            <LinkButton>
            <LinkButtonText>forgot your email</LinkButtonText>
            </LinkButton>
                <LabelDefault>Password</LabelDefault>
            <InputUser/>
            <LinkButton>
            <LinkButtonText> forgot your Password</LinkButtonText>
            </LinkButton>


            <ButtonView>
            <ButtonContainer>
                     <ButtonText><Icon name='arrowright' size={20}/> sign </ButtonText>
            </ButtonContainer>
            </ButtonView>
          

            </ViemForm>
        </ViewDefault>
            
        </>
    )
}

