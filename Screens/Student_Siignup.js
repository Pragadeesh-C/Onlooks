import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Student_Signup = () => {
  const fb = id => {
    console.log('Hi');
    firestore()
      .collection('Users')
      .add({
        id: id + '@student',
        role: 'student',
        stat: 0,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  function generateRandomId() {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  const LoginAuth = async () => {
    await auth()
      .createUserWithEmailAndPassword(emailID, password)
      .then(() => {
        console.log('User added!');
        fb(generateRandomId());
      });

    navigation.navigate('Login', {name: 'Login'});
    console.log(auth().currentUser?.email);
  };

  return (
    <View>
      <Text>Student_Siignup</Text>
    </View>
  );
};

export default Student_Signup;

const styles = StyleSheet.create({});
