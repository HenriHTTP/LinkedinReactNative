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
    ContainerDefault,
} from '../Style/Styled';
import {Alert} from 'react-native';
import  Icon from 'react-native-vector-icons/AntDesign'
import {useNavigation} from "@react-navigation/native"




export default function Home() {
    const navigation = useNavigation();
    let  msg = () => { 
        Alert.alert('true')
    }
    let handleNavigate = () => { navigation.navigate('Index',{LeftIcons:'user' ,RightIcons: 'setting',})}
    return(
        <>
        <StatusBarDefault/>
        <ContainerDefault>
        <NaVDefault>
            <TitleDefault> <Icon name='linkedin-square' size={70}/> </TitleDefault>
        </NaVDefault>
        <ViewDefault animation="fadeInUp">
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
            
            
            <ButtonContainer onPress={handleNavigate}>
                     <ButtonText><Icon name='arrowright' size={20}/> sign </ButtonText>
            </ButtonContainer>

    
          

            </ViemForm>
        </ViewDefault>
        </ContainerDefault>   
        </>
    )
}

