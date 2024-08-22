import React, {useState} from "react"
import {Text, View, TextInput, Button, StyleSheet, Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    } 


})
const SplashScreen = function () {
    const logoIst = 'https://png.pngtree.com/png-vector/20220411/ourmid/pngtree-red-3d-heart-emoji-realistic-shadow-png-image_4539964.png'
    return <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#ffb6c1', '#fff5ee']}
                style={style.container}
    >
              <Image
            style={style.logo}
            source={{
                uri:logoIst,
            }}
            
            />
    </LinearGradient>
    
}
export default SplashScreen; 