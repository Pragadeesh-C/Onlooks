import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import Signup from './Signup';
import firestore from '@react-native-firebase/firestore';
import React from 'react';

const Login = ({navigation}) => {
  const [userid, setuserid] = useState('');
  const [password, setpassword] = useState('');

  const LoginAuth = async () => {
    console.log("Hi")
    firestore()
      .collection('Users')
      .where('id', 'in', [userid])
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(snapshot => {
          console.log("In", snapshot)
          if (snapshot.data().role == 'student') {
            console.log("Student")
            navigation.navigate('Profile');
          } else {
            console.log("Techer")
            navigation.navigate('Attendance');
          }
        });
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text
          style={{
            fontSize: 24,
            marginTop: 100,
            textAlign: 'center',
            justifyContent: 'center',
          }}>
          Login
        </Text>
        <TextInput
          placeholder="Email"
          value={userid}
          onChangeText={Text => setuserid(Text)}
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 70,
            marginHorizontal: 10,
          }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={Text => setpassword(Text)}
          secureTextEntry={true}
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 40,
            marginHorizontal: 10,
          }}
        />
          <TouchableOpacity style={styles.button} onPress={LoginAuth}>
            <Text style={{color: 'white', fontSize: 15}}>Login</Text>
          </TouchableOpacity>
          
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"",
    // alignItems:"center",
  },
  button: {
    height: 50,
    width: 400,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 5,
    marginTop: 40,
  },
  card: {
    // justifyContent:"center",
    // alignItems:"center",
  },
});
