import React from 'react';
import Home from './components /home/home';
import NavBar from './components /Navbar/Navbar';
import{NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator ()
export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home"  component={Home} options={{
            title:'',
            headerTransparent:true, 
            headerShown:false
          }}/>
          <Stack.Screen name="Index" component={NavBar} options={{
            title:'',
            headerTransparent:true, 
            headerShown:false
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
      
    </>
  );
}

