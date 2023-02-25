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
import {useNavigation} from "@react-navigation/native"



export default function home() {
    const navigation = useNavigation();
    let  msg = () => { 
        Alert.alert('true')
    }
    let handleNavigate = () => { navigation.navigate('Index',{LeftIcons:'user' ,RightIcons: 'setting',})}
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
            <ButtonContainer onPress={handleNavigate}>
                     <ButtonText><Icon name='arrowright' size={20}/> sign </ButtonText>
            </ButtonContainer>
            </ButtonView>
          

            </ViemForm>
        </ViewDefault>
            
        </>
    )
}

