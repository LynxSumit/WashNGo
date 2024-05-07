import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MotiImage, MotiView } from 'moti'
import { images } from '../../assets'
import { colors } from '../../constants/colors'
import LargeFillBtn from '../../components/LargeFillBtn'
import LargeFillBtnOutline from '../../components/LargeFullBtnOutline'
import { FAB, IconButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation()
  return (
    <View style={{
        flex: 1,
        alignItems: 'center',
    }}>
  
   <MotiView
   style={{
    marginTop : '20%',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor : colors.themeColor,
           padding : 20,
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
        height : 100,
        width : 100
       }}
    />
   </MotiView>
   <Text style={{
    color : colors.themeColor,
    fontSize : 18,
    fontWeight : '500',
    fontStyle : 'italic',
    marginTop : 8
   }}>Spark Mingle</Text>
   
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
    fontSize : 18,
    fontWeight : '500',
    color : colors.black,
    marginBottom : 10
  
   }}>
    Sign up to continue
   </Text>
   <View style={{
    gap : 16,
    marginVertical : 12
   }}>

   <LargeFillBtn
    title='Continue With Email'
    onPress={() => alert('Login')}
   />
  
  <LargeFillBtnOutline
    onPress={() => navigation.navigate('EnterPhone') }
    title={'Use Phone Number'}

  />
   </View>

    <Text style={{
    fontSize : 14,
    
    color : colors.black,
    marginTop : '10%',
    marginBottom : 10
    }}>
    Or Signup with
    </Text>
    <MotiView style={{
      flexDirection : 'row',
      gap : 8,
      justifyContent : 'center',
      
    }}

    transition={
        {
            type : 'timing',
            duration : 2000
        }
    }

   animate={({transform : [{translateX : 10}]})}
    
    >
       <IconButton
       animated
        icon='facebook'
        iconColor={colors.themeColor}
        size={30}
        style={{
            borderColor : colors.grey,
            borderWidth : .4,
            borderRadius : 8
        }}
        onPress={() => alert('Facebook')}
         />
       <IconButton
       animated
       icon={'google-plus'}
        iconColor={colors.themeColor}
        size={30}
        style={{
            borderColor : colors.grey,
            borderWidth : .4,
            borderRadius : 8
        }}
        onPress={() => alert('Google')}
         />
         <IconButton
         animated
         icon={'apple'}
        iconColor={colors.themeColor}
        size={30}
        style={{
            borderColor : colors.grey,
            borderWidth : .4,
            borderRadius : 8
        }}
        onPress={() => alert('Apple')}
         />
         <IconButton
         animated
         icon={'twitter'}
        iconColor={colors.themeColor}
        size={30}
        style={{
            borderColor : colors.grey,
            borderWidth : .4,
            borderRadius : 8
        }}
        onPress={() => alert('Twitter')}
         />
         









    </MotiView>

    <Text style={{
    fontSize : 14,
    color : colors.themeColor,
   position : 'absolute',
    bottom : 0,
    marginBottom : 16


    }}>
    Spark Mingle © copyright 2024. All rights reserved.
    </Text>


   </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})