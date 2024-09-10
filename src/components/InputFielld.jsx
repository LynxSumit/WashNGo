import React, { useState } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { fontFamily } from '../utils/fonts';
import { colors } from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InputField = ({
  label,
  placeholder,
  regex,
  isPass = false,
  icon,
  ...props
}) => {
    console.log(secureTextEntry)
    const [secureTextEntry, setSecureTextEntry] = useState(false);

    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
      };
    
  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
         
        <Text style={styles.label}>
            {label}
          </Text>
          <View style={styles.inputContainer}>
            {
              icon && <Image source={icon} style={styles.icon} />
            }
            <TextInput placeholder={placeholder} style={styles.input}
            
              secureTextEntry={secureTextEntry}
             
              {...props} />
              {isPass && <TouchableOpacity style={{
                position: 'absolute',
                right: 10,
                top: 10,
                zIndex: 1,
              }}>
                <AntDesign name={secureTextEntry ? 'eye' : 'eyeo'} size={24} color={colors.grey} onPress={toggleSecureTextEntry} />
              </TouchableOpacity>}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
    width: '100%',
  },
//   label: {
//     fontSize: 18,
//     fontFamily : fontFamily.InterMedium,
//     fontStyle : "italic",
    
//     marginBottom: 3,
//   },
label: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily : fontFamily.bold,
    color : colors.black,
    opacity : .85,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 14,
    tintColor : colors.grey
  },
  input: {
    borderRadius: 50,
    paddingHorizontal: 14,
    fontStyle : "italic",
    // paddingVertical : 14,
    fontWeight: '400',
    fontFamily : fontFamily.InterMedium,
    opacity : .7,
    fontSize: 15,
    flex: 1,
    textAlign: 'left',
  },
});

export default InputField;