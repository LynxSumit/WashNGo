import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {
    MotiImage,
    MotiView
} from 'moti'
import { MotiPressable } from 'moti/interactions'
import { images } from '../../assets'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation()
    const onPress = () => {
        console.log('Pressed')
    }

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000)
    }, []);

  return (
   <MotiView style={{
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#430064'
   }}>

   <MotiImage
    source={
        images.mainLogo
    }
    style={{
       
        // width : 200,
        height: 200,
        width : 200,
    }}
    resizeMode='contain'
   />

   </MotiView>
  )
}

export default Splash

const styles = StyleSheet.create({})