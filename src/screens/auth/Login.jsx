import { Alert, Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Image, MotiImage, MotiView, ScrollView } from 'moti'
import { images } from '../../assets'
import { colors } from '../../constants/colors'
import LargeFillBtn from '../../components/LargeFillBtn'
import LargeFillBtnOutline from '../../components/LargeFullBtnOutline'
import { FAB, IconButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { fontFamily } from '../../utils/fonts'
import { fontSizeConstant } from '../../utils/fontSize'
import PhoneNumberInput from '../../components/PhoneNumberInput'
import InputField from '../../components/InputFielld'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { validPhone } from '../../utils/validations'
import {showMessage} from "react-native-flash-message"
const { height, width } = Dimensions.get('window'); // for responsiveness
import {AppContext, useAuth} from "../../context/Auth.Context"
const Login = () => {
    const navigation = useNavigation();
    const { login, isAuthenticated, error, loading } = useAuth(); // Use the custom hook
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateInputs = () => {
        if (!phone || !validPhone(phone)) {
            showMessage({
                message: "Invalid Phone Number",
                type: "danger",
            });
            return false;
        }
        if (!password || password.length < 6) {
            showMessage({
                message: "Password must be at least 6 characters long",
                type: "danger",
            });
            return false;
        }
        return true;
    };

    const handleSignIn = async () => {
        if (isSubmitting || loading) return;
        if (!validateInputs()) return;
      
        setIsSubmitting(true);
        try {
          const success = await login({ phone, password });
          if (success) {
            // Navigation to the main app screen will be handled by the Navigator
            // based on the `isAuthenticated` state
          }
        } catch (err) {
          console.error("Login error:", err);
        } finally {
          setIsSubmitting(false);
        }
      };

    useEffect(() => {
        if (error) {
            showMessage({
                message: error,
                type: "danger",
            });
        } else if (isAuthenticated) {
            showMessage({
                message: "Login successful!",
                type: "success",
            });
            // Navigate to the main app screen or dashboard
          // Adjust based on your navigation structure
        }
    }, [error, isAuthenticated]);
   
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems : "center"}} style={styles.container}>
        {/* Logo Section */}
        <MotiView
          style={styles.logoContainer}
          from={{
            opacity: 0,
            translateY: -20
          }}
          animate={{
            opacity: 1,
            translateY: 0
          }}
          transition={{
            type: 'timing',
            duration: 1000
          }}>
          <MotiImage
            source={images.mainLogo}
            resizeMode='contain'
            style={styles.logoImage}
          />
        </MotiView>
   
        {/* Form Section */}
        <View style={styles.formContainer}>
          <Text style={styles.signInText}>Sign In</Text>
          <Text style={styles.welcomeText}>Hi! Welcome back, you have been missed</Text>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <InputField
              icon={images.phone}
              label={"Phone Number"}
              placeholder={"Enter your phone number"}
              value={phone}
              onChangeText={(val) => setPhone(val)}
              keyboardType="phone-pad"
            />
            <InputField
              isPass={true}
              icon={images.lock}
              label={"Password"}
              placeholder={"xxxxxxxx"}
              value={password}
              onChangeText={(val) => setPassword(val)}
            />
          </View>

          {/* Forgot Password and Sign In Button */}
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </View>
          <View style={{width : "100%", marginTop : 20}}>

            <LargeFillBtn loading={isSubmitting} title={`Sign In`} onPress={() => handleSignIn()} />
          </View>

          {/* Divider and Social Login */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialLoginContainer}>
            <TouchableOpacity style={styles.socialIcon}>
              <MaterialCommunityIcons name="google" size={18} color={colors.black} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <MaterialCommunityIcons name="apple" size={18} color={colors.black} />
            </TouchableOpacity>
          </View>

          {/* Sign Up Text */}
          <Text style={styles.signUpText}>
            Don't have an account?  <Text onPress={() => navigation.navigate("SignupDetails")} style={styles.signUpLink}>
              Sign Up
            </Text>
          </Text>

          {/* Terms of Use */}
          <Text style={styles.termsText}>
            By login or sign up, you agree to our terms of use and privacy policy
          </Text>

          {/* Background Image */}
          <Image 
            style={styles.backgroundImage} 
            source={images.right}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login

// Styling
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      backgroundColor: colors.white,
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      marginTop: 30,
    },
    logoImage: {
      height: height * 0.3, // responsive size for logo
      width: width * 0.6,
    },
    formContainer: {
      flex: 1,
      width: '100%',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      padding: 16,
      alignItems: 'center',
      paddingHorizontal: 20,
     
    },
    signInText: {
      fontWeight: '700',
      color: colors.black,
      lineHeight: 34,
      fontSize: 28,
      marginBottom: 16,
      alignSelf : "flex-start",
      fontFamily: fontFamily.bold,
    },
    welcomeText: {
      fontWeight: '500',
      width: '70%', // responsive width
      color: colors.grey,
      alignSelf : "flex-start",
      lineHeight: 24,
      opacity: 0.8,
      fontSize: fontSizeConstant.l,
     
      marginBottom: 20,
    },
    inputContainer: {
      width: '100%',
      // paddingHorizontal: 20,
      gap: 18,
    },
    forgotPasswordContainer: {
      marginTop: 8,
    //   width: '80%',
      flexDirection : "row",
      alignItems : "center",
      gap : 6,
      alignItems: 'flex-end',
      alignSelf : "flex-end",
      // paddingHorizontal : 14,
    },
    forgotPasswordText: {
      
      color: colors.black,
      fontWeight: '500',
      textDecorationLine: 'underline',
    },
    dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      width: '100%',
    },
    dividerLine: {
      width: '40%',
      height: 1.5,
      backgroundColor: colors.btnColor,
    },
    dividerText: {
      color: colors.black,
      fontWeight: '500',
      marginHorizontal: 8,
    },
    socialLoginContainer: {
      marginTop: 22,
      gap: 22,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    socialIcon: {
      borderWidth: 1,
      borderColor: colors.btnColor,
      height: 40,
      width: 40,
      borderRadius: 20,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    signUpText: {
      fontSize: 14,
      color: colors.grey,
      opacity: 0.9,
      fontWeight: '400',
      marginTop: 20,
    },
    signUpLink: {
      fontFamily: fontFamily.medium,
      fontWeight: '700',
      textDecorationLine: 'underline',
      color: colors.black,
    },
    termsText: {
      fontSize: 14,
      width: '85%',
      lineHeight: 24,
      color: colors.grey,
      opacity: 0.9,
      fontWeight: '400',
      marginTop: 12,
      marginBottom: 20,
      textAlign: 'center',
    },
    backgroundImage: {
      position: 'absolute',
      right: -40,
      zIndex: -100,
      bottom: -60,
      transform: [{rotate: '90deg'}],
      width: 230,
      height: 230,
      resizeMode: 'contain',
    },
  });