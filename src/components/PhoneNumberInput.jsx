import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PhoneInput from 'react-native-phone-number-input';
import { colors } from '../constants/colors';

const PhoneNumberInput = ({
    value,
    setValue,
   
}) => {
    const phoneInput = React.useRef(null);
    
  return (
    <PhoneInput
    containerStyle={{
        borderColor : colors.lightGrey,
       borderRadius : 12,
       paddingVertical : 4,
       paddingHorizontal : 10,
       width : 340,
        borderWidth : .4
    }}
    codeTextStyle={{
        color : colors.darkGrey,
      
    }}
    textInputStyle={{
        color : colors.black,
        fontSize : 16,
        backgroundColor : colors.white,
        borderLeftColor : colors.lightGrey,
        borderLeftWidth : .4,
        paddingLeft : 10
    }}
    textContainerStyle={{
        backgroundColor : colors.white
    }}

            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            layout="first"
            onChangeText={(text) => {
            //   setValue(text);
            console.log(text)
            }}
            onChangeFormattedText={(text) => {
              setValue(text)
            }}
            
            
            autoFocus
          />
  )
}

export default PhoneNumberInput

const styles = StyleSheet.create({})