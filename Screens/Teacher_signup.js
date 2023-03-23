import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Teacher_signup = () => {
  const fb = id => {
    firestore()
      .collection('Users')
      .add({
        id: id + '@teacher',
        role: 'teacher',
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
      <Text>Teacher_signup</Text>
    </View>
  );
};

export default Teacher_signup;

const styles = StyleSheet.create({});
