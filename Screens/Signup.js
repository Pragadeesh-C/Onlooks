import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import firebase from '@react-native-firebase/app';
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import React, { useEffect} from 'react';

const Signup = ({navigation}) => {
  const [emailID, setemailID] = useState('');
  const [password, setpassword] = useState('');

  const fb = () => {
    console.log("Hi")
    firestore()
      .collection('Users')
      .add({
        name: 'Ada Lovelace',
        age: 30,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  const LoginAuth = async () => {
    await auth()
      .createUserWithEmailAndPassword(emailID, password)
      .then(() => {
        console.log('User added!');
        fb();
      });

    navigation.navigate('Login', {name: 'Login'});
    console.log(auth().currentUser?.email);
  };

  useEffect(() => {
    fb();
  }, [])
  

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
          Signup
        </Text>
        <TextInput
          placeholder="Email"
          value={emailID}
          onChangeText={Text => setemailID(Text)}
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
          <Text style={{color: 'white', fontSize: 15}}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"black",
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
