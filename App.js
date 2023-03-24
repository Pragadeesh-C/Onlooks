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
import Admin from './Screens/Admin';
import Student_Signup from './Screens/Student_Siignup';
import Teacher_signup from './Screens/Teacher_signup';
import Profile from './Screens/Profile';



const Stack = createNativeStackNavigator();

function App() {

  
  return (
  <NavigationContainer>
     <Stack.Navigator initialRouteName='Admin'>
      <Stack.Screen  name="Login" component={Login} options={{title: 'Welcome Back'}}/>
      <Stack.Screen  name="Signup" component={Signup} options={{title: 'Welcome'}}/>
      <Stack.Screen  name="Attendance" component={Attendance} options={{title: 'Attendance'}}/>
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="Student_Signup" component={Student_Signup} />
      <Stack.Screen name="Teacher_signup" component={Teacher_signup} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>

  </NavigationContainer>
  // <Profile/>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:"center",
    // alignItems:"center",
    
  },
  
})

