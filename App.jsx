import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { ToastProvider } from 'react-native-toast-notifications'
import { Badge, PaperProvider } from 'react-native-paper'
import BottomSheett from './src/components/MyBottomSheet'
import Splash from './src/screens/Splash/Splash'
import { Navigator } from './src/navigation/Router'
import { colors } from './src/constants/colors'
import {AuthProvider, useAuth} from "./src/context/Auth.Context"
import FlashMessage from "react-native-flash-message";

const App = () => {

  return (
    <AuthProvider>

    <NavigationContainer>
    <GestureHandlerRootView style={{ flex: 1 }}>
    <PaperProvider>
    <ToastProvider>
    <View style={{
        flex: 1,
       
        
    }}>
    <StatusBar
      backgroundColor={"transparent"}
      translucent
      barStyle="dark-content"
    />
     {/* <BottomSheett/> */}
     <Navigator/>
    </View>
    </ToastProvider>
    </PaperProvider>
    </GestureHandlerRootView>
    </NavigationContainer>
    <FlashMessage 
      position="top" statusBarHeight={30} animated />
    </AuthProvider>

  )
}

export default App

const styles = StyleSheet.create({})