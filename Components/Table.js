import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StdData from './StdData';

const Table = () => {
  return (
    <View style={style.container}>
      <View style={style.nav}>
        <Text style={style.txt}>ID</Text>
        <Text style={style.txt}>Names</Text>
        <Text style={style.txt}>Status</Text>
      </View>
    <ScrollView>
        <StdData />
    </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 400,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 30,
    marginLeft: 39,
  },
  txt: {
    color: 'black',
    margin: 15,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
});
export default Table;