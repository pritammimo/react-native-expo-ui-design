import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo, Feather, FontAwesome, FontAwesome5, FontAwesome6, Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
export default function signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState('');
  const [username, setusername] = useState('');
  const [phone, setphone] = useState('');
  const router=useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/topVector.png')} style={styles.top}/>
      </View>
      <View>
      <Text style={styles.signuptext}>Create account</Text>
      </View>
      <View style={styles.emailcontainer}>
      <FontAwesome name="user" size={24} color="#9a9a9a" style={styles.emailicon} />
      <TextInput style={styles.input}
      value={username} onChangeText={setusername} placeholder='Username'/>
      </View>
      <View style={styles.passwordcontainer}>
     <Entypo name="lock-open" size={24} color="#9a9a9a" style={styles.emailicon} />
      <TextInput style={styles.input} 
      value={password} onChangeText={setpassword} placeholder='password' secureTextEntry/>
      </View>
      <View style={styles.emailcontainer}>
      <Fontisto name="email" size={24} color="#9a9a9a" style={styles.emailicon} />
      <TextInput style={styles.input}
      value={email} onChangeText={setemail} placeholder='Email'/>
      </View>
      <View style={styles.passwordcontainer}>
      <Feather name="phone" size={24} color="#9a9a9a" style={styles.emailicon} />
      <TextInput style={styles.input}
      value={phone} onChangeText={setphone} placeholder='Phone' keyboardType='numeric'/>
      </View>
      <View style={styles.signincontainer}>
        <Text style={styles.signinbutton}>Create</Text>
        <LinearGradient colors={['#F97794', '#623AA2']} style={styles.signinarrow}>
        <Entypo name="arrow-bold-right" size={24} color="#FFFFFF" />
</LinearGradient>
      </View>
      <View>
        <Text style={styles.accountcreate}>Or create account using social media</Text>
      </View>
      <View style={styles.socialcontainer}>
      <FontAwesome5 name="facebook" size={35} color="blue" />
      <FontAwesome6 name="square-x-twitter" size={35} color="black" />
      <Entypo name="google--with-circle" size={35} color="red" />
      </View>
     <View style={styles.bottomimagecontainer}>
     <ImageBackground source={require('../../assets/Vector2.png')} style={styles.backgroundimage}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      position:'relative',
    },
    socialcontainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      marginTop:12,
      gap:10,

    },
    backgroundimage:{
     height:250,
     width:250,
    },
    accountcreate:{
      fontWeight:'400',
      textAlign:'center',
      fontSize:15,
      marginTop:20,
      marginLeft:25,
    },
    bottomimagecontainer:{
     position:'absolute',
      bottom:0,
      left:0,
    },
    signincontainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'flex-end',
      marginTop:30,
      gap:10,
    },
    signinarrow:{
      width:56,
      borderRadius:17,
      height:40,
      alignItems:'center',
      justifyContent:'center',
      marginRight:20,
    },
    signinbutton:{
      fontWeight:'700',
      fontSize:25,
      //textAlign:'center',
    },
    forgotcontainer:{
      flexDirection:'row',
      alignItems:'flex-end',
    },
    forgottext:{
      fontWeight:'400',
      fontSize:16,
      textAlign:'right',
      lineHeight:19.2,
      marginRight:20,
      color:'#BEBEBE',
      marginTop:20,
    },
    emailcontainer:{
     flexDirection:'row',
     alignItems:'center',
     marginHorizontal:20,
     marginVertical:30,
     elevation:10,
     borderRadius:40,
     backgroundColor:'#FFFFFF',
     minHeight:50,
    },
    passwordcontainer:{
      flexDirection:'row',
      alignItems:'center',
      marginHorizontal:20,
      // marginVertical:40,
      elevation:10,
      borderRadius:40,
      backgroundColor:'#FFFFFF',
      minHeight:50,
     },
    input:{
         fontSize:15,
         fontWeight:'400',
         color: '#C8C8C8',
         textAlign:'center',
    },
    emailicon:{
        marginRight:14,
        marginLeft:14,
    },
    top:{
        width:"100%",
        height:119,
        left:-1
    },
    hellotext:{
      fontSize:64,
      fontWeight:'500',
      lineHeight:76.8,
      textAlign:'center',
    },
    signuptext:{
        fontWeight:'700',
        fontSize:30,
        textAlign:'center',
        lineHeight:36,
        marginTop:47,
    }
})