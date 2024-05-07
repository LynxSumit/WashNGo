import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MotiImage, MotiView } from 'moti'
import { images } from '../../assets'
import PhoneNumberInput from '../../components/PhoneNumberInput'
import { colors } from '../../constants/colors'
import { MotiPressable } from 'moti/interactions'
import LargeFillBtn from '../../components/LargeFillBtn'
import { useNavigation } from '@react-navigation/native'

const EnterPhone = () => {
    const [phone, setPhone] = useState(null);
    const navigation = useNavigation()
  return (
    <MotiView style={{
        flex : 1,
       
        alignItems : 'center',
    
    
    }}>
    <MotiView
   style={{
    backgroundColor : colors.themeColor,
    padding : 20,
    marginTop : '20%',
    marginBottom : 10,
    borderRadius : 10
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
        height : 50,
        width : 50,
        
       }}
    />
   </MotiView>
    <Text style={{
        color : colors.themeColor,
        fontSize : 18,
        fontWeight : '500',
        fontStyle : 'italic',
        marginBottom : '10%'
    
    }}>Sign Up</Text>

        <PhoneNumberInput
        value={phone}
        setValue={setPhone}
        />
<View style={{
    marginTop : '50%'
}}>
        <LargeFillBtn
        title='Continue'
        onPress={() => {
          navigation.navigate('VerifyOtp')
        }}
        />
        </View>

    </MotiView>
  )
}

export default EnterPhone

const styles = StyleSheet.create({})