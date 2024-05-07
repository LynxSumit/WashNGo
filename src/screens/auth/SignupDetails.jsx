import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MotiImage, MotiView } from 'moti'
import { images } from '../../assets'
import PhoneNumberInput from '../../components/PhoneNumberInput'
import { colors } from '../../constants/colors'
import { MotiPressable } from 'moti/interactions'
import LargeFillBtn from '../../components/LargeFillBtn'
import { useNavigation } from '@react-navigation/native'
import { useForm , Controller } from 'react-hook-form'
import { TextInput } from 'react-native-paper'
import PasswordField from '../../components/PasswordField'


const SignupDetails = () => {
    const [phone, setPhone] = useState(null);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const navigation = useNavigation()
  return (
    <MotiView style={{
        flex : 1,
       backgroundColor : colors.white,
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
        fontSize : 20,
        fontWeight : '700',
        // fontStyle : 'italic',
        marginBottom : 10
    
    }}>Sign Up</Text>
    <Text style={{
        color : colors.black,
        fontSize : 12,
     
        // fontStyle : 'italic',
        marginBottom : '10%',
        textAlign : 'center',
        width : '74%'
    
    }}>Please enter your valid email address. We will send you a 4-digit code to verify your account.</Text>

      
<View style={{
   gap : 12,
   marginBottom : 18
}}>
    <Controller
    control={control}
    render={({ field: { onChange, onBlur, value } }) => (
        <MotiView
        from={{
            opacity : 0,
            translateX : -10
        }}
        animate={{
            opacity : 1,
            translateX : 0
        }}
        transition={{
            type : 'timing',
            duration : 800
        }}
        style={{
            width : 280,
            // borderRadius : 60,
            // overflow : 'hidden',
            
      
        }}
        >

        <TextInput
        activeOutlineColor={"#A9A9A9"}
        outlineColor={"#A9A9A9"}
        
        label='Email'
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
            backgroundColor : colors.white
        }}
       
        style={{
            paddingHorizontal : 6,
           borderRadius : 60
        }}
        />
        </MotiView>
    )}
    name='email'
    rules={{ required: 'Email is required', pattern: {value: /^\S+@\S+$/i, message: 'Invalid email'}}}
    defaultValue=''
    />



    <Controller
    control={control}
    render={({ field: { onChange, onBlur, value } }) => (
        <MotiView
        from={{
            opacity : 0,
            translateX : -10
        }}
        animate={{
            opacity : 1,
            translateX : 0
        }}
        transition={{
            type : 'timing',
            duration : 800
        }}
        style={{
            width : 280,
            // borderRadius : 60,
            // overflow : 'hidden',
            
      
        }}
        >

        <TextInput
        activeOutlineColor={"#A9A9A9"}
        outlineColor={"#A9A9A9"}
        
        label='Username'
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
            backgroundColor : colors.white

        }}
       
        style={{
            paddingHorizontal : 6,
           borderRadius : 60
        }}
        />
        </MotiView>
    )}
    name='username'
    rules={{ required: 'Username is required' }}
    defaultValue=''
    />
    <Controller
    control={control}
    render={({ field: { onChange, onBlur, value } }) => (
        <MotiView
        from={{
            opacity : 0,
            translateX : -10
        }}
        animate={{
            opacity : 1,
            translateX : 0
        }}
        transition={{
            type : 'timing',
            duration : 800
        }}
        style={{
            width : 280,
            // borderRadius : 60,
            // overflow : 'hidden',
        }}
        >

        <PasswordField
        label='Password'

        value={value}
        onChange={onChange}
        onBlur={onBlur}

        />
        </MotiView>
    )}
    name='password'
    rules={{ required: 'Password is required' , minLength : 6, message : 'Password must be at least 6 characters'}}
    defaultValue=''
    />
    <Controller
    control={control}
    render={({ field: { onChange, onBlur, value } }) => (
        <MotiView
        from={{
            opacity : 0,
            translateX : -10
        }}
        animate={{
            opacity : 1,
            translateX : 0
        }}
        transition={{
            type : 'timing',
            duration : 800
        }}
        style={{
            width : 280,
            // borderRadius : 60,
            // overflow : 'hidden',
        }}
        >

        <PasswordField
        label='Confirm Password'

        value={value}
        onChange={onChange}
        onBlur={onBlur}

        />
        </MotiView>
    )}
    name='confirm_password'
    rules={{ required: 'Password is required' , minLength : 6, message : 'Password must be at least 6 characters'}}
    defaultValue=''
    />


    

        
        
        
        
        
        
        
        
        
        
        
        </View>
        
        <LargeFillBtn
        title='Continue'
        onPress={() => {
          navigation.navigate('ProfileSetup')
        }}
        />

    </MotiView>
  )
}

export default SignupDetails

const styles = StyleSheet.create({})