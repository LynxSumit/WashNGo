import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MotiPressable } from 'moti/interactions'

const LargeFillBtn = ({title , onPress}) => {
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
            backgroundColor: '#430064',
            width : 280,
            borderRadius : 10,
            paddingVertical : 14,
            justifyContent : 'center',
            alignItems : 'center',
        }}  
        >
        <Text style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '500'
        }}>{title}</Text>
        </MotiPressable>
  )
}

export default LargeFillBtn

const styles = StyleSheet.create({})