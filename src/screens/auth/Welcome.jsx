import { Alert, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import React from 'react'
import { MotiImage, MotiView,  } from 'moti'
import { images } from '../../assets'
import { colors } from '../../constants/colors'
import LargeFillBtn from '../../components/LargeFillBtn'
import LargeFillBtnOutline from '../../components/LargeFullBtnOutline'
import { FAB, IconButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { fontFamily } from '../../utils/fonts'
import { fontSizeConstant } from '../../utils/fontSize'

const Welcome = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex : 1}}>

    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center'}} style={{
        flex: 1,
       
        backgroundColor : colors.white
    }}>
  
  <View style={{width : Dimensions.get("window").width, flexDirection : "row", alignItems : "center", justifyContent : "space-between",}}>
    <MotiImage
      source={images.left}
      style={{height : 270, width : Dimensions.get("window").width * .45}}
    />
    <MotiImage
  source={images.right}
  style={{height : 270, width : Dimensions.get("window").width * .45}}

    />
  </View>
   <MotiView
   style={{
         justifyContent: 'center',
         alignItems: 'center',
            borderRadius : 30
    
   }}
   from={{
    opacity : 0,
    translateY : -20
    }}
    animate={{
        opacity : 1,
        translateY : 0
    }}
    transition={{
        type : 'timing',
        duration : 1000
    }}
    >
    <MotiImage
        source={images.mainLogo}
       resizeMode='contain'
       style={{
        height : 280,
        width : 280
       }}
    />
   </MotiView>
   
   
   <View style={{
         flex : 1,
   
         width : '100%',
         borderTopRightRadius : 30,
         borderTopLeftRadius : 30,
         padding : 20,
         
         marginTop : 30,
         alignItems : 'center'

   }}>
   <Text style={{

    fontWeight : '700',
    color : colors.black,
    lineHeight :34,
    textAlign : "center",
    width : "78%",
    opacity : .6,
    marginBottom : 30,
    fontFamily : fontFamily.bold,
    fontSize : fontSizeConstant.xxl
  
   }}>
    Sparkle & Shine Transform Your Driver with Every Wash!
   </Text>
   <View style={{
    gap : 16,
    marginVertical : 12,
    width : Dimensions.get("window").width * .8 
    
    }}>

   <LargeFillBtn
    title={`Let's Start`}
    onPress={() => navigation.navigate("SignupDetails")}
   />
  
 
   </View>

    <Text style={{
    fontSize : 14,
    
    color : colors.black,
    opacity:  .7,
    fontWeight : "500",
    marginTop : 20,
    marginBottom : 10
    }}>
   Already have an account? <Text onPress={() => navigation.navigate("Login")} style={{fontFamily : fontFamily.medium , fontWeight:"700", textDecorationLine : "underline", color : colors.black }}>Sign in</Text>
    </Text>
   


   </View>
    </ScrollView>
    </SafeAreaView>

  )
}

export default Welcome

const styles = StyleSheet.create({})