import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { ToastProvider } from 'react-native-toast-notifications'
import { Badge, PaperProvider } from 'react-native-paper'
import BottomSheett from './src/components/MyBottomSheet'
import Splash from './src/screens/Splash/Splash'
import { Navigator } from './src/navigation/Router'

const App = () => {
  return (
    <NavigationContainer>
    <GestureHandlerRootView style={{ flex: 1 }}>
    <PaperProvider>
    <ToastProvider>
    <View style={{
        flex: 1,
       
        
    }}>
     {/* <BottomSheett/> */}
     <Navigator/>
    </View>
    </ToastProvider>
    </PaperProvider>
    </GestureHandlerRootView>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})