import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import PushNotification from 'react-native-push-notification';


const ParentHome = () => {
  

  const [Sid, setSid] = useState([])
  const [studEmail, setStudEmail] = useState('');


  PushNotification.createChannel(
    {
      channelId: 'geofence-notifications',
      channelName: 'Geofence Notifications',
      channelDescription: 'Notifications for geofence events',
      importance: 4,
      vibrate: true,
    },
    (created) => {
      console.log('Geofence channel created');
    },
  );


  useEffect(() => {
    var gmail = auth().currentUser.email
    console.log(gmail)
    firestore().collection('Users').doc(gmail).get()
  .then(doc => {
    if (doc.exists) {
      console.log(doc.data());
    } else {


      console.log('No such document!');
    }
  })
  .catch(error => {
    console.log('Error getting document:', error);
  });

  }, []);
  
  

  


  return (
    <View>
      <Text>{Sid}</Text>
    </View>
  )
}

export default ParentHome

const styles = StyleSheet.create({})
