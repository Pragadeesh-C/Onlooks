import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import React from 'react';
import Button from '../Components/Button';

const Admin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>@Admin Dashboard</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Student_Signup', {name: 'Student_Signup'})
        }>
        <Text style={styles.text}>Create Student</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Teacher_signup', {name: 'Teacher_signup'})
        }>
        <Text style={styles.text}>Create Teacher</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Admin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#79CBF3',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    // marginTop:15,
    borderRadius: 30,
  },
  text: {
    color: '#FFF',
    fontSize: 17,
  },
});
