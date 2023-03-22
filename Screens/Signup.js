import { StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import { useState } from 'react'
import auth from '@react-native-firebase/auth'
import React from 'react'

const Signup = ({navigation}) => {
  const [emailID,setemailID] = useState('')
  const [password,setpassword] = useState('')
  
  const LoginAuth = async() => {
    await auth().createUserWithEmailAndPassword(emailID,password)
    navigation.navigate('Login',{name:'Login'})
    console.log(auth().currentUser?.email)
    
  }


  return (
    <View style={styles.container}>
      <View style={styles.card}>

      <Text style={{ fontSize:24,marginTop:100,textAlign:"center",justifyContent:"center",}}>Signup</Text>
      <TextInput placeholder='Email' value={emailID} onChangeText={(Text)=>setemailID(Text)} style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginTop:70,marginHorizontal:10, }}/>
      <TextInput placeholder='Password' value={password} onChangeText={(Text)=>setpassword(Text)} secureTextEntry={true} style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop:40,marginHorizontal:10, }}/>
      <TouchableOpacity style={styles.button} onPress={LoginAuth}>
        <Text style={{color:"white",fontSize:15,} }>SignUp</Text>


      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:"black",
    // alignItems:"center",
    
  },
  button:{
    height:50,
    width:400,
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