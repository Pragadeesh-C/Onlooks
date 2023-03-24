import { Image, StyleSheet, Text, TouchableOpacity, View,ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import React from 'react'

const Profile = () => {
  return (
    <LinearGradient colors={['#383875','#34346D','#33316A','#302D65','#2C2B5D','#353470', '#2E2C63', '#272657']} style={styles.linearGradient}>
      
      <TouchableOpacity style={{height: 40,width: 40,borderRadius: 100,backgroundColor: "white",justifyContent:"center",alignItems:"center",opacity:0.2,marginTop:30,marginLeft:20,}}>
        <Ionicons name={'chevron-back-sharp'} style={{fontSize:25}} color={"white"} />
      </TouchableOpacity>
      <View style={{flexDirection:"column",alignItems:"center",}}>
      <View style={{height: 200,width: 200,borderRadius: 100,backgroundColor: "white",justifyContent:"center",alignItems:"center",marginTop:35,}}>
      <Image style={styles.dp} source={require("../assets/Studentdp.jpg")} />
      </View>
      <Text style={{color:"white",fontSize:30,fontWeight:"bold",marginTop:10,}}>Kashmira Paradesi</Text>
      <View style={{height:40,width:190,borderRadius:25,marginTop:10,backgroundColor:"#2F82FA",alignItems:"center",justifyContent:"center"}}><Text style={{color:"white"}}>Student</Text></View>
      </View>
      {/* Dp and NAme */}
      <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:30,}}>
        <View style={{flexDirection:"column",alignItems:"center",}}>
          <Text style={{fontSize:16,color:'#73739F',}}>Semester</Text>
          <Text style={{color:"white",marginTop:7,fontSize:17}}>4</Text>
        </View>
        <View style={{flexDirection:"column",alignItems:"center",}}>
          <Text style={{fontSize:16,color:'#73739F',}}>Year</Text>
          <Text style={{color:"white",marginTop:7,fontSize:17}}>2</Text>
        </View>
        <View style={{flexDirection:"column",alignItems:"center",}}>
          <Text style={{fontSize:16,color:'#73739F',}}>Batch</Text>
          <Text style={{color:"white",marginTop:7,fontSize:17}}>2021-2025</Text>
        </View>
      </View>
      {/* begining of cards */}
      {/* <LinearGradient colors={['#3C3A88','#3A3987','#383785','#383785','#383581','#383581', '#35327E',]} style={styles.card}>
      </LinearGradient> */}
      <View style={styles.card}>
        <View style={{flexDirection:"row",alignItems:"center",}}>
        <ActivityIndicator size={50} Text={"72%"} color={'red'} style={{alignItems:"flex-start",marginTop:45,marginLeft:55,}}/>
        <View style={{marginLeft:20,}}>
        <Text style={{fontSize:18,color:'white',marginTop:45,}}>Present Percent:</Text>
        <Text>75%</Text>
        </View>
        </View>

      </View>

     
    </LinearGradient>
  )
}

export default Profile

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,    
  },
  card:{
    height:320,
    width:390,
    // margin:50,
    marginTop:20,
    left:10,
    borderRadius:45,
    backgroundColor:"#3C3A88",

  },
  dp:{
    resizeMode:"contain",
    height: 200,
    width: 200,
    borderRadius: 100,

  },
})