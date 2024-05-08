import { Dimensions, Keyboard, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Appbar, Checkbox, Icon, TextInput } from 'react-native-paper'
import { MotiText, MotiView } from 'moti'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'
import { colors } from '../../constants/colors'
import { useNavigation } from '@react-navigation/native'
import LargeFillBtn from '../../components/LargeFillBtn'
import { MotiPressable } from 'moti/interactions'
import { set } from 'react-hook-form'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SelectGender = () => {
    const [value, setValue] = useState("");
    const navigation = useNavigation()
    const [selectedGender, setSelectedGender] = useState("man");
    const [adult, setAdult] = useState(false);
    const [terms, setTerms] = useState(false);
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
     
       
    }}>
      <Appbar.Header style={{
           backgroundColor : 'white',
           width : Dimensions.get('window').width,
      }}>
        <Appbar.BackAction iconColor={
            colors.black
        } style={{
            

            
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
                translateX : -15
            }}
            animate={{
                opacity : 1,
                translateX : 0
            }}
            transition={{
                type : 'timing',
                duration : 1000
            }}

             style={{
                fontSize : 38,
                fontWeight : '700',
                color : '#430064',
                textAlign : 'left',
                alignSelf : 'flex-start',
                marginLeft : 20
               
            }}>
               I am a: 
            </MotiText>
        
        </MotiView>

        {/* // Genders Field  */}


       
        
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
        marginTop : 40,
        alignItems : 'center',
        gap : 28,
        width : Dimensions.get('window').width,
    }}
 >
<MotiPressable
    from={{
        opacity : 0,
        translateX : -20
    }}
    animate={{
        opacity : 1,
        translateX : 0
    }}
    transition={{
        type : 'timing',
        duration : 1000
    }}
    onPress={() => {
      setSelectedGender("women")
    }}
    style={{
        backgroundColor : selectedGender == "women" ? colors.themeColor : "white",
        width : Dimensions.get('window').width - 40,
        borderWidth : selectedGender == "women" ? 0 : .6,
        borderColor : colors.themeColor,
        justifyContent : 'space-between',
        paddingHorizontal : 18,
        paddingVertical : 22,
        alignItems : 'center',
        borderRadius : 10,
        paddingLeft : 20,
        flexDirection : 'row'
    }}
    >
    <Text style={{
        color : selectedGender == "women" ? 'white' : 'black',
        fontSize : 16,
        fontWeight : '500'
    }}
    >
        Women
    </Text>
    <AntDesign name={
            selectedGender == "women" ? 'checkcircle' : 'checkcircleo'
        
        }
        
         size={16} color={
            selectedGender == "women" ? 'white' : colors.themeColor
        } />
</MotiPressable>
<MotiPressable
    from={{
        opacity : 0,
        translateX : -20
    }}
    animate={{
        opacity : 1,
        translateX : 0
    }}
    transition={{
        type : 'timing',
        duration : 1000
    }}
    onPress={() => {
       setSelectedGender("man")
    }}
    style={{
        backgroundColor : selectedGender == "man" ? colors.themeColor : "white",
        width : Dimensions.get('window').width - 40,
        borderWidth : selectedGender == "man" ? 0 : .6,
        borderColor : colors.themeColor,
        justifyContent : 'space-between',
        paddingHorizontal : 18,
        paddingVertical : 22,
        alignItems : 'center',
        borderRadius : 10,
        paddingLeft : 20,
        flexDirection : 'row'
    }}
    >
    <Text style={{
        color : selectedGender == "man" ? 'white' : 'black',
        fontSize : 16,
        fontWeight : '500'
    }}
    >
        Man
    </Text>
    <AntDesign name={
            selectedGender == "man" ? 'checkcircle' : 'checkcircleo'
        
        }
        
         size={16} color={
            selectedGender == "man" ? 'white' : colors.themeColor
        } />
</MotiPressable>
<MotiPressable
    from={{
        opacity : 0,
        translateX : -20
    }}
    animate={{
        opacity : 1,
        translateX : 0
    }}
    transition={{
        type : 'timing',
        duration : 1000
    }}
    onPress={() => {
      setSelectedGender("other")
    }}
    style={{
        backgroundColor : selectedGender == "other" ? colors.themeColor : "white",
        width : Dimensions.get('window').width - 40,
        borderWidth : selectedGender == "other" ? 0 : .6,
        borderColor : colors.themeColor,
        paddingVertical : 22,
        borderRadius : 10,
        justifyContent : 'space-between',
        paddingHorizontal : 18,
        alignItems : 'center',
        paddingLeft : 20,
        flexDirection : 'row'
    }}
    >
    <Text style={{
        color : selectedGender == "other" ? 'white' : 'black',
        fontSize : 16,
        fontWeight : '500'
    }}
    >
        Choose Gender 
    </Text>
    <AntDesign name={
            selectedGender == "other" ? 'checkcircle' : 'checkcircleo'
        
        }
        
         size={16} color={
            selectedGender == "other" ? 'white' : colors.themeColor
        } />
    
</MotiPressable>
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

    
       
        flexDirection : 'row',
        
        gap : 10
    }}
    >
    <Checkbox
        status={
            adult ? 'checked' : 'unchecked'
        }
        onPress={() => {
            setAdult(!adult)
        }}
        color={colors.themeColor}
    />
    <Text style={{
        color : colors.black,
        fontSize : 14,
        width : '80%'
    }}>
       By checking this box I agree that I am 18 years of age or older.
    </Text>
   </MotiView>
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

    
       
        flexDirection : 'row',
        
        gap : 10
    }}
    >
    <Checkbox
        status={
            terms ? 'checked' : 'unchecked'
        }
        onPress={() => {
            setTerms(!terms)
        }}
        color={colors.themeColor}
    />
    <Text style={{
        color : colors.black,
        fontSize : 14,
        width : '80%'
    }}>
       I have read and fully understand it’s User Policy and I accept all of the Terms and Conditions of this application and website.
    </Text>
   </MotiView>

</MotiView>

            

















            {/* // Resend Code  */}
            <View
          style={{
            width: '90%',
            position: 'absolute',
            bottom: 30,
        
            alignSelf : 'center'
          }}>
          <LargeFillBtn
            title="Confirm"
            onPress={() => {
                navigation.navigate('YourInterests')
            }}
          />
        </View>


        













    </View>
  )
}

export default SelectGender

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