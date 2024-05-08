import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { IconButton, TextInput } from 'react-native-paper'
import { colors } from '../constants/colors'

const PasswordField = ({
    onBlur,
    onChange,
    value,
    label
}) => {
    const [secure, setSecure] = useState(true);
  return (
    <View style={{
        flexDirection : 'row',
        alignItems : 'center',
        gap:  8,
        width : '100%'
        // width : 280,
     
    }}>
    <TextInput
        activeOutlineColor={"#A9A9A9"}
        outlineColor={"#A9A9A9"}
        
        label={label}
        mode='outlined'
        selectionColor={colors.themeColor}
        theme={
            {
                colors : {
                    primary : colors.themeColor
                }
            }
        
        }
        placeholderTextColor={'#A9A9A9'}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        outlineStyle={{
            // width : 2,
            borderRadius : 14,
            borderWidth : .5,
            backgroundColor : colors.white,
            
         

        }}
        contentStyle={{
            color : colors.black,
        }}
       
        style={{
            paddingHorizontal : 6,
           borderRadius : 60,
           backgroundColor : colors.white,
           width : '100%'
           
        }}
        secureTextEntry={secure}
        right={
         () =>  <IconButton
            icon={secure ? 'eye-off' : 'eye'}
            color={colors.themeColor}
            size={20}
            onPress={() => setSecure(!secure)}
            />
        }
        />
     

    </View>
  )
}

export default PasswordField

const styles = StyleSheet.create({})