import React from 'react';
import Icon  from 'react-native-vector-icons/AntDesign'
import { 
    NavBar,
    StatusBarDefault,
    SeachInput,
    TextNavbar,
} from '../Style/Styled';

export default function navBar ({nameiconsLeft,nameiconsRight}) { 
    return (
        <> 
        <StatusBarDefault/>
        <NavBar> 
           <TextNavbar><Icon name={nameiconsLeft} size={30}/></TextNavbar> 
            <SeachInput/>
            <TextNavbar><Icon name={nameiconsRight} size={30}/></TextNavbar> 
        </NavBar>
        </>
    )
}
