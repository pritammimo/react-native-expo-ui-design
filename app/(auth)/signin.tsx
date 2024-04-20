import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
export default function signin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState('');
  const router=useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/topVector.png')} style={styles.top}/>
      </View>
      <View >
      <Text style={styles.hellotext}>Hello</Text>
      <Text style={styles.signintext}>Sign in to your account</Text>
      </View>
      <View style={styles.emailcontainer}>
      <FontAwesome name="user" size={24} color="#9a9a9a" style={styles.emailicon} />
      <TextInput style={styles.input}
      value={email} onChangeText={setemail} placeholder='Email'/>
      </View>
      <View style={styles.passwordcontainer}>
     <Entypo name="lock-open" size={24} color="#9a9a9a" style={styles.emailicon} />
      <TextInput style={styles.input} 
      value={password} onChangeText={setpassword} placeholder='password' secureTextEntry/>
      </View>
        <Text style={styles.forgottext}>Forgot your password?</Text>
      <View style={styles.signincontainer}>
        <Text style={styles.signinbutton}>Signin</Text>
        <LinearGradient colors={['#F97794', '#623AA2']} style={styles.signinarrow}>
        <Entypo name="arrow-bold-right" size={24} color="#FFFFFF" />
</LinearGradient>
      </View>
      <Pressable onPress={()=>router.replace('/signup')}>
        <Text style={styles.accountcreate}>Don't have an account,create?</Text>
      </Pressable>
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
    backgroundimage:{
     height:250,
     width:250,
    },
    accountcreate:{
      fontWeight:'400',
      textAlign:'center',
      fontSize:15,
      marginTop:120,
      marginLeft:20,
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
      marginTop:60,
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
    signintext:{
        fontWeight:'400',
        fontSize:18,
        textAlign:'center',
        lineHeight:21.6,
    }
})