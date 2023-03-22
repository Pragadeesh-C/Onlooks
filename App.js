// 
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View ,TextInput,Button} from 'react-native'
import firebase from '@react-native-firebase/app';
import 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Attendance from './Screens/Attendance';



const Stack = createNativeStackNavigator();

function App() {

  
  return (
  <NavigationContainer>
     <Stack.Navigator initialRouteName='Signup'>
      <Stack.Screen  name="Login" component={Login} options={{title: 'Welcome Back'}}/>
      <Stack.Screen  name="Signup" component={Signup} options={{title: 'Welcome'}}/>
      <Stack.Screen  name="Attendance" component={Attendance} options={{title: 'Attendance'}}/>
    </Stack.Navigator>

  </NavigationContainer>
  // <Signup/>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    // alignItems:"center",
    
  },
  
})

