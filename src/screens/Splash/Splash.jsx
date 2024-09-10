import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {
    MotiImage,
    MotiView
} from 'moti'
import { MotiPressable } from 'moti/interactions'
import { images } from '../../assets'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = () => {
    const navigation = useNavigation()
    
    const checkAuth = async () => {

        const user = await AsyncStorage.getItem('user')
        if(!user) {
           return navigation.replace('Welcome')
        }
        
    }

    useEffect(() => {
        setTimeout(() => {
            checkAuth()
            
        }, 3000)
    }, []);

  return (
   <ImageBackground
    style={{flex : 1,backgroundColor : "#FFFFFF36" }}
    source={images.splash}
   />
  )
}

export default Splash

const styles = StyleSheet.create({})