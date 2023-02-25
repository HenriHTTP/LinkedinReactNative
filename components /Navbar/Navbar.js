import React from 'react';
import Icon  from 'react-native-vector-icons/AntDesign'
import { 
    NavBar,
    StatusBarDefault,
    SeachInput,
    TextNavbar,
    PressIcons,
    SeachButton,
    SeachIcon,
} from '../Style/Styled';

export default function navBar ({route}) { 
    return (
        <> 
        <StatusBarDefault/>
        <NavBar> 

        <PressIcons>
           <TextNavbar><Icon name={route.params.LeftIcons} size={30}/></TextNavbar> 
        </PressIcons>
            <SeachInput/>
            <SeachButton>
                    <SeachIcon> <Icon name='search1' size={15}/></SeachIcon>
                </SeachButton>
               
           


            <PressIcons>

            <TextNavbar><Icon name={route.params.RightIcons} size={30}/></TextNavbar> 

            </PressIcons>
        </NavBar>
        </>
    )
}
