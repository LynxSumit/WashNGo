import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MotiHover, MotiPressable } from 'moti/interactions'
import { colors } from '../constants/colors'
import { fontFamily } from '../utils/fonts'

const LargeFillBtn = ({title , onPress , loading=false}) => {
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
            backgroundColor: colors.btnColor,
            width : '100%',
            borderRadius : 40,
            paddingVertical : 14,
            justifyContent : 'center',
            alignItems : 'center',
        }}  
        >
        {!loading ? <Text style={{
            color: colors.btnText,
            fontFamily : fontFamily.InterExtraBold,
            fontSize: 18,
            fontWeight: '700'
        }}>{title}</Text> : <ActivityIndicator
            size="small"
            color={colors.btnText}
            style={{marginRight : 10}}
  
        />}
        </MotiPressable>
  )
}

export default LargeFillBtn

const styles = StyleSheet.create({})