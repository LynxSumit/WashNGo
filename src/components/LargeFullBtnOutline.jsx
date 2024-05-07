import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MotiPressable } from 'moti/interactions'
import { colors } from '../constants/colors'

const LargeFillBtnOutline = ({title , onPress}) => {
  return (
    <MotiPressable
    onPress={onPress}
        from={{
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            opacity: 1,
            scale: 1
        }}
        style={{
            borderColor: '#430064',
            borderWidth: 1,
            width : 280,
            borderRadius : 10,
            paddingVertical : 10,
            justifyContent : 'center',
            alignItems : 'center',
        }}  
        >
        <Text style={{
            color: colors.themeColor,
            fontSize: 16,
            fontWeight: '500'
        }}>{title}</Text>
        </MotiPressable>
  )
}

export default LargeFillBtnOutline

const styles = StyleSheet.create({})