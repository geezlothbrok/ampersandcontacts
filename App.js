import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GetStarted from './src/screens/GetStarted';
import Login from './src/screens/Login';
import Welcome from './src/screens/Welcome';
import Register from './src/screens/Register';
import QrCodeGenerator from './src/component/QrCodeGenerator';
import Scanner from './src/screens/Scanner';
import ProfileAccont from './src/component/ProfileAccont';
import MyProfile from './src/screens/MyProfile';
import MemberProfile from './src/screens/MemberProfile';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';


const Stack = createStackNavigator();

export default function App({navigation}) {
  const onPrevious = () => {
    navigation.navigate('Welcome')
  };
  const handlePress = () => {
    navigation.navigate('Profile')
  }
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options = {{ header : () => null,}} name = 'Get Started' component = {GetStarted}/>
        <Stack.Screen  options = {{ header : () => null,}} name = 'Welcome' component = {Welcome}/>
        <Stack.Screen options = {{
          headerStyle: {
						 	backgroundColor: '#FD0039',
						},
            headerTitleStyle: {
							color: 'white',
              marginLeft : 70
						},
           headerLeft: () => {
							return (
								<TouchableOpacity onPress = {onPrevious}>
                  <MaterialCommunityIcons name="keyboard-backspace" size={30} color="white" style = {{
                    marginLeft : 20}} />
                </TouchableOpacity>
							);
						},}} name = 'Register' component = {Register} />
        <Stack.Screen  options = {{
          headerStyle: {
						 	backgroundColor: '#FD0039',
						},
            headerTitleStyle: {
							color: 'white',
              marginLeft : 70
						},
           headerLeft: () => {
							return (
								<TouchableOpacity onPress = {onPrevious}>
                  <MaterialCommunityIcons name="keyboard-backspace" size={30} color="white" style = {{
                    marginLeft : 20}} />
                </TouchableOpacity>
							);
						},}} name = 'Login' component = {Login}/>

            <Stack.Screen  options = {{ title : 'AMPERSAND', headerTitleStyle : {
              color : 'white',
              marginLeft : 80,
              fontSize : 25
            }, 
            headerLeft : () => null, 
            headerStyle : {
              backgroundColor : '#FD0039',
              height : 110
            },
            
            headerRight : () => {
              return (
                <TouchableOpacity onPress = {handlePress}>
                  <AntDesign name="user" size={24} color="white" style = {{marginRight : 30}} />
                </TouchableOpacity>
              )
            }
            }} name = 'QrCode' component = {QrCodeGenerator}/>

            <Stack.Screen options = {{ header : () => null,}} name = 'Scan' component = {Scanner}/>

            <Stack.Screen name = 'Profile' component = {MyProfile}/>
            

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
