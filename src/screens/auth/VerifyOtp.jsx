import { Dimensions, Keyboard, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Appbar } from 'react-native-paper'
import { MotiText, MotiView } from 'moti'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'
import { colors } from '../../constants/colors'
import { useNavigation } from '@react-navigation/native'

const VerifyOtp = () => {
    const [value, setValue] = useState("");
    const navigation = useNavigation()
    const CELL_COUNT = 4
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });



    useEffect(() => {
        if(value.length === 4){
            Keyboard.dismiss()
            navigation.navigate("SignupDetails")
        }
        
    }, [value.length]);
  return (
    <View style={{
        flex : 1,
        backgroundColor : 'white',

        alignItems : 'center'
    }}>
      <Appbar.Header style={{
           backgroundColor : 'white',
           width : Dimensions.get('window').width,
      }}>
        <Appbar.BackAction style={{

            
        }} onPress={() => {
            navigation.goBack()
        }} />
        
        </Appbar.Header>

        <MotiView
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
        style={{
            marginTop : '20%',
            alignItems : 'center'
        }}
        >
            <MotiText
            from={{
                opacity : 0,
                translateY : -10
            }}
            animate={{
                opacity : 1,
                translateY : 0
            }}
            transition={{
                type : 'timing',
                duration : 1000
            }}

             style={{
                fontSize : 30,
                fontWeight : '600',
                color : '#430064'
            }}>
                00:50
            </MotiText>
            <Text style={{
                fontSize : 14,
                color : '#430064',
                marginTop : 10
            }}>Type the verification code that was sent you</Text>
        </MotiView>

        {/* // Code Field  */}
<KeyboardAvoidingView behavior='padding' style={{
    flex : 1,

    alignItems : 'center'
}}>
        <MotiView
        from={{
            opacity : 0,
            translateY : -10
        }}
        animate={{
            opacity : 1,
            translateY : 0
        }}
        transition={{
            type : 'timing',
            duration : 1000
        }}
        style={{
            marginTop : '10%',
            alignItems : 'center'
        }}
        >
      
      <CodeField
                ref={ref}
              
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={4}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => {
                    const hasValue = Boolean(symbol);
                    return  <MotiView key={index} style={{
                        padding : 15,
      width: 70,
      height: 70,
      lineHeight: 38,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: hasValue ? colors.themeColor : colors.white,
        borderColor: colors.themeColor,
        borderWidth: hasValue ? 0 : 1,
      borderRadius: 8,  
    
                    }}>

                  <MotiText 
                  from={{
                        opacity : 0,
                        translateY : -10 + index * 10
                    }}
                    animate={{
                        opacity : 1,
                        translateY : 0
                    }}
                    transition={{
                        type : 'timing',
                        duration : 800
                    }}

                  
                    style={[{
                        fontSize: 24,
      textAlign: 'center',
      fontWeight : '500',
      color: hasValue ? colors.white : colors.grey,
                    }, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </MotiText>
                  </MotiView>

                }}
              />
            
        </MotiView>
        </KeyboardAvoidingView>

        {/* Dialpad  */}
        


            

















            {/* // Resend Code  */}
            <MotiView
            from={{
                opacity : 0,
                translateY : 10
            }}
            animate={{
                opacity : 1,
                translateY : 0
            }}
            transition={{
                type : 'timing',
                duration : 1000
            }}
            style={{
                marginTop : '10%',
                alignItems : 'center',
                marginBottom : 18
            }}
            >
                <Text style={{
                    color : '#430064',
                    fontSize : 14,
                    fontWeight : '600'
                }}>Send again</Text>
            </MotiView>


        













    </View>
  )
}

export default VerifyOtp

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: "center", fontSize: 30 },
    codeFieldRoot: {marginTop: 20 , height : 80 , width : '80%', gap : 12},
    cell: {
       
    },
    focusCell: {
      borderColor: "#000",
    },
})