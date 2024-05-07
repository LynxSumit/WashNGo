import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MotiImage, MotiScrollView, MotiView } from 'moti'
import { images } from '../../assets'
import PhoneNumberInput from '../../components/PhoneNumberInput'
import { colors } from '../../constants/colors'
import { MotiPressable } from 'moti/interactions'
import LargeFillBtn from '../../components/LargeFillBtn'
import { useNavigation } from '@react-navigation/native'
import { useForm , Controller } from 'react-hook-form'
import { IconButton, TextInput } from 'react-native-paper'
import PasswordField from '../../components/PasswordField'
import ImageCropPicker from 'react-native-image-crop-picker'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ProfileSetup = () => {
    const [selectedImage, setSelectedImage] = useState({});
    const [phone, setPhone] = useState(null);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const navigation = useNavigation()

    const handleImage = async () => {

//    try {
//          ImageCropPicker.openPicker({
//              width: 300,
//              height: 400,
//              cropping: true
//            }).then(image => {
//              console.log(image);
//            });
//    } catch (error) {
//     console.log(error , "Error")
    
//    }
    }
  return (
    <MotiScrollView
    showsVerticalScrollIndicator={false}
        from={{
            opacity : 0,
            translateY : -20
        }}
        animate={{
            opacity : 1,
            translateY : 0
        }}



        transition={
            {
                type : 'timing',
                duration : 1000
            }
        }
     contentContainerStyle={{
         alignItems : 'center',
    }} style={{
        flex : 1,
       backgroundColor : colors.white,
    }}>
     <Text style={{
        color : colors.themeColor,
        fontSize : 24,
        fontWeight : '600',
        // fontStyle : 'italic',
       
        marginTop : '20%',
        marginBottom : 10,
    
    }}>Your Profile</Text>
    <MotiView
   style={{
    backgroundColor : colors.themeColor,
    padding : 20,
   
    marginBottom : 20,
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
        source={selectedImage.path ? {uri : selectedImage.path} : {uri : "https://img.icons8.com/plumpy/192/user.png"}}
       resizeMode='contain'
       tintColor={colors.white}
       style={{
        height : 90,
        width : 70,
        
        
       }}
    />
    <IconButton
    icon='camera'
  
    iconColor={colors.white}
    size={20}
    onPress={ () => handleImage()}
    style={{
        position : 'absolute',
        bottom : -20,
        right : -20,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : colors.themeColor,
        borderWidth : 1,
        borderColor : colors.white
        
    }}

    />
   </MotiView>
   
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
        
        label='First Name'
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
    name='first_name'
    rules={{ required: true  }}
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
        
        label='Last Name'
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
    name='last_name'
    rules={{ required: true}}
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
        
        label='University / Alumini'
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
    name='university'
    rules={{ required: true }}
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
        
        label='Greek Life'
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
    name='greek_life'
    rules={{ required: true }}
    defaultValue=''
    />

    <Text style={{
        color : colors.black,
        fontSize : 12,
        textAlign : 'center',
        width : '74%',
        // fontStyle : 'italic',
       
        marginTop : 15
    }}>
        
        Address will be only shared with the gift vendors
    </Text>


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
        
        label='Street'
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
    name='street'
    rules={{ required: true }}
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
        
        label='City'
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
    name='city'
    rules={{ required: true }}
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
        
        label='State'
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
    name='state'
    rules={{ required: true }}
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
        
        label='Zip Code'
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
    name='zip_code'
    rules={{ required: true }}
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
        
        label='Occupation'
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
    name='occupation'
    rules={{ required: true }}
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
        
        label='Refer Code'
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

        <MotiPressable
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
            duration : 800
        }}
        style={{
            flexDirection : 'row',
            alignItems : 'center',
            gap : 6,
            backgroundColor : "#ECC5FF",
            paddingVertical : 12,
            paddingHorizontal : 16,
            borderRadius : 12,
            marginTop : 15
        }}
        >
        <AntDesign name="calendar" size={24} color={colors.themeColor} />
            <Text style={{
                color : colors.themeColor,
                fontSize : 16
            
            }}>Choose birth date</Text>
        </MotiPressable>
        <MotiPressable
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
            duration : 800
        }}
        style={{
            flexDirection : 'row',
            alignItems : 'center',
            justifyContent : 'space-around',
            backgroundColor : "#fff",
            borderWidth : .6,
            borderColor : "#A9A9A9",
            paddingVertical : 12,
            // paddingHorizontal : 6,
            borderRadius : 12,
            marginTop : 15
        }}
        >
            <Text style={{
                color : "#A9A9A9",
                fontSize : 13
            
            }}>Upload Self Introduction Video</Text>
        <MaterialCommunityIcons  name="video" size={24} color={colors.themeColor} />
        </MotiPressable>


      
        </MotiView>
    )}
    name='refer_code'
    rules={{ required: true }}
    defaultValue=''
    />
    
        </View>
        
        <LargeFillBtn
        title='Confirm'
        onPress={() => {
        //   navigation.navigate('VerifyOtp')
        }}
        />

    </MotiScrollView>
  )
}

export default ProfileSetup

const styles = StyleSheet.create({})