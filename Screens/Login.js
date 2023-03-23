import { StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import { useState } from 'react'
import auth from '@react-native-firebase/auth'
import Signup from './Signup'
import React from 'react'

const Login = ( {navigation}) => {
  const [emailID,setemailID] = useState('')
  const [password,setpassword] = useState('')
  
  const LoginAuth = async() => {
    await auth().signInWithEmailAndPassword(emailID,password)
    navigation.navigate('Attendance',{name:'Attendance'})
    console.log(auth().currentUser?.email)
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>

      <Text style={{ fontSize:24,marginTop:100,textAlign:"center",justifyContent:"center",}}>Login</Text>
      <TextInput placeholder='Email' value={emailID} onChangeText={(Text)=>setemailID(Text)}  style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginTop:70,marginHorizontal:10, }}/>
      <TextInput placeholder='Password' value={password} onChangeText={(Text)=>setpassword(Text)} secureTextEntry={true} style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop:40,marginHorizontal:10, }}/>
      <View style={{flexDirection:"row",}}>

      <TouchableOpacity style={styles.button} onPress={LoginAuth} >
        <Text style={{color:"white",fontSize:15,} }>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Signup',{name:"Signup"})} >
        <Text style={{color:"white",fontSize:15,} }>Signup</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:"",
    // alignItems:"center",
    
  },
  button:{
    height:50,
    width:200,
    backgroundColor:"blue",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20,
    marginLeft:5,
    marginTop:40,
  },
  card:{
    // justifyContent:"center",
    // alignItems:"center",
  }
})