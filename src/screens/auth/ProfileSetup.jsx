import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {MotiImage, MotiScrollView, MotiView} from 'moti';
import {images} from '../../assets';
import PhoneNumberInput from '../../components/PhoneNumberInput';
import {colors} from '../../constants/colors';
import {MotiPressable} from 'moti/interactions';
import LargeFillBtn from '../../components/LargeFillBtn';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller, set} from 'react-hook-form';
import {Checkbox, IconButton, TextInput} from 'react-native-paper';
import PasswordField from '../../components/PasswordField';
import ImageCropPicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
const ProfileSetup = () => {
  const [selectedImage, setSelectedImage] = useState({});
  const [phone, setPhone] = useState(null);
  const [vaccinated, setVaccinated] = useState(false);
  const [videoAdded, setVideoAdded] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation();

  const handleImage = async () => {
    try {
      ImageCropPicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
        setSelectedImage(image);
      });
    } catch (error) {
      console.log(error, 'Error');
    }
  };
  const uploadVideo = async () => {
    try {
      ImageCropPicker.openPicker({
        mediaType: 'video',
      }).then(image => {
        console.log(image);
        setVideoAdded(true);
      });
    } catch (error) {
      console.log(error, 'Error');
    }
  };
  return (
    <MotiScrollView
      showsVerticalScrollIndicator={false}
      from={{
        opacity: 0,
        translateY: -20,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        type: 'timing',
        duration: 1000,
      }}
      contentContainerStyle={{
        alignItems: 'center',
      }}
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
       <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Text
        style={{
          color: colors.themeColor,
          fontSize: 24,
          fontWeight: '600',
          // fontStyle : 'italic',

          marginTop: '20%',
          marginBottom: 10,
        }}>
        Your Profile
      </Text>
      <MotiView
        style={{
          backgroundColor: colors.themeColor,
          padding: 20,

          marginBottom: 20,
          borderRadius: 10,
        }}
        from={{
          opacity: 0,
          translateY: -20,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          type: 'timing',
          duration: 1000,
        }}>
        <MotiImage
          source={
            selectedImage.path
              ? {uri: selectedImage.path}
              : {uri: 'https://img.icons8.com/plumpy/192/user.png'}
          }
          resizeMode="cover"
        //   tintColor={colors.white}
          style={{
            height: 90,
            width: 70,
          }}
        />
        <IconButton
          icon="camera"
          iconColor={colors.white}
          size={20}
          onPress={() => handleImage()}
          style={{
            position: 'absolute',
            bottom: -20,
            right: -20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.themeColor,
            borderWidth: 1,
            borderColor: colors.white,
          }}
        />
      </MotiView>

      <Text
        style={{
          color: colors.black,
          fontSize: 12,

          // fontStyle : 'italic',
          marginBottom: '10%',
         
          width: '74%',
        }}>
        Please enter your valid email address. We will send you a 4-digit code
        to verify your account.
      </Text>

      <View
        style={{
          gap: 12,
          marginBottom: 18,
          width: '100%',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <MotiView
              from={{
                opacity: 0,
                translateX: -10,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                type: 'timing',
                duration: 800,
              }}
              style={{
                width: '90%',
                // borderRadius : 60,
                // overflow : 'hidden',
              }}>
                 {/* <TextInput
        mode="outlined"
        label="Remitter Mobile Number"
        style={{backgroundColor: 'white' }}
        selectionColor={'black'}
        placeholderTextColor={'white'}
        activeOutlineColor={'black'}
        onChangeText={(text) => {}}
        autoCapitalize="none"
        blurOnSubmit={false}
        keyboardType="number-pad"
        returnKeyType="done"
        maxLength={10}
        value={""}
      /> */}
              <TextInput
              mode="outlined"
                label={"First Name"}
               style={{
                  paddingHorizontal: 6,
                  borderRadius: 60,
             textDecorationStyle : "dotted",
             backgroundColor : "white"
                  

                  
                }}
                activeOutlineColor={'#A9A9A9'}
                outlineColor={'#A9A9A9'}
                contentStyle={{
                    color : colors.black,
                }}
                selectionColor={colors.themeColor}
                theme={{
                  colors: {
                    primary: colors.themeColor,
                  },
                }}
                placeholderTextColor={'#A9A9A9'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                
                outlineStyle={{
                  // width : 2,
                  borderRadius: 14,
                  borderWidth: 0.5,
                  backgroundColor: colors.white,
                  
               
                }}
               
              />
            </MotiView>
          )}
          name="first_name"
          rules={{required: true}}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <MotiView
              from={{
                opacity: 0,
                translateX: -10,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                type: 'timing',
                duration: 800,
              }}
              style={{
                width: '90%',
                // borderRadius : 60,
                // overflow : 'hidden',
              }}>
              <TextInput
                activeOutlineColor={'#A9A9A9'}
                outlineColor={'#A9A9A9'}
                label="Last Name"
                mode="outlined"
                selectionColor={colors.themeColor}
                theme={{
                  colors: {
                    primary: colors.themeColor,
                  },
                }}
                placeholderTextColor={'#A9A9A9'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                outlineStyle={{
                  // width : 2,
                  borderRadius: 14,
                  borderWidth: 0.5,
                  backgroundColor: colors.white,
                }}
                style={{
                  paddingHorizontal: 6,
                  borderRadius: 60,
             backgroundColor : "white"

                }}
              />
            </MotiView>
          )}
          name="last_name"
          rules={{required: true}}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <MotiView
              from={{
                opacity: 0,
                translateX: -10,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                type: 'timing',
                duration: 800,
              }}
              style={{
                width: '90%',
                // borderRadius : 60,
                // overflow : 'hidden',
              }}>
              <TextInput
                activeOutlineColor={'#A9A9A9'}
                outlineColor={'#A9A9A9'}
                label="University / Alumini"
                mode="outlined"
                selectionColor={colors.themeColor}
                theme={{
                  colors: {
                    primary: colors.themeColor,
                  },
                }}
                placeholderTextColor={'#A9A9A9'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                outlineStyle={{
                  // width : 2,
                  borderRadius: 14,
                  borderWidth: 0.5,
                  backgroundColor: colors.white,
                }}
                style={{
                  paddingHorizontal: 6,
                  borderRadius: 60,
             backgroundColor : "white"

                }}
              />
            </MotiView>
          )}
          name="university"
          rules={{required: true}}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <MotiView
              from={{
                opacity: 0,
                translateX: -10,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                type: 'timing',
                duration: 800,
              }}
              style={{
                width: '90%',
                // borderRadius : 60,
                // overflow : 'hidden',
              }}>
              <TextInput
                activeOutlineColor={'#A9A9A9'}
                outlineColor={'#A9A9A9'}
                label="Greek Life"
                mode="outlined"
                selectionColor={colors.themeColor}
                theme={{
                  colors: {
                    primary: colors.themeColor,
                  },
                }}
                placeholderTextColor={'#A9A9A9'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                outlineStyle={{
                  // width : 2,
                  borderRadius: 14,
                  borderWidth: 0.5,
                  backgroundColor: colors.white,
                }}
                style={{
                  paddingHorizontal: 6,
                  borderRadius: 60,
             backgroundColor : "white"

                }}
              />
            </MotiView>
          )}
          name="greek_life"
          rules={{required: true}}
          defaultValue=""
        />

        <Text
          style={{
            color: colors.black,
            fontSize: 12,
            textAlign: 'left',
            width: '90%',
            // fontStyle : 'italic',

            marginTop: 15,
          }}>
          Address will be only shared with the gift vendors
        </Text>

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <MotiView
              from={{
                opacity: 0,
                translateX: -10,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                type: 'timing',
                duration: 800,
              }}
              style={{
                width: '90%',
                // borderRadius : 60,
                // overflow : 'hidden',
              }}>
              <TextInput
                activeOutlineColor={'#A9A9A9'}
                outlineColor={'#A9A9A9'}
                label="Street"
                mode="outlined"
                selectionColor={colors.themeColor}
                theme={{
                  colors: {
                    primary: colors.themeColor,
                  },
                }}
                placeholderTextColor={'#A9A9A9'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                outlineStyle={{
                  // width : 2,
                  borderRadius: 14,
                  borderWidth: 0.5,
                  backgroundColor: colors.white,
                }}
                style={{
                  paddingHorizontal: 6,
                  borderRadius: 60,
             backgroundColor : "white"

                }}
              />
            </MotiView>
          )}
          name="street"
          rules={{required: true}}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <MotiView
              from={{
                opacity: 0,
                translateX: -10,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                type: 'timing',
                duration: 800,
              }}
              style={{
                width: '90%',
                // borderRadius : 60,
                // overflow : 'hidden',
              }}>
              <TextInput
                activeOutlineColor={'#A9A9A9'}
                outlineColor={'#A9A9A9'}
                label="City"
                mode="outlined"
                selectionColor={colors.themeColor}
                theme={{
                  colors: {
                    primary: colors.themeColor,
                  },
                }}
                placeholderTextColor={'#A9A9A9'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                outlineStyle={{
                  // width : 2,
                  borderRadius: 14,
                  borderWidth: 0.5,
                  backgroundColor: colors.white,
                }}
                style={{
                  paddingHorizontal: 6,
                  borderRadius: 60,
             backgroundColor : "white"

                }}
              />
            </MotiView>
          )}
          name="city"
          rules={{required: true}}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <MotiView
              from={{
                opacity: 0,
                translateX: -10,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                type: 'timing',
                duration: 800,
              }}
              style={{
                width: '90%',
                // borderRadius : 60,
                // overflow : 'hidden',
              }}>
              <TextInput
                activeOutlineColor={'#A9A9A9'}
                outlineColor={'#A9A9A9'}
                label="State"
                mode="outlined"
                selectionColor={colors.themeColor}
                theme={{
                  colors: {
                    primary: colors.themeColor,
                  },
                }}
                placeholderTextColor={'#A9A9A9'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                outlineStyle={{
                  // width : 2,
                  borderRadius: 14,
                  borderWidth: 0.5,
                  backgroundColor: colors.white,
                }}
                style={{
                  paddingHorizontal: 6,
                  borderRadius: 60,
             backgroundColor : "white"

                }}
              />
            </MotiView>
          )}
          name="state"
          rules={{required: true}}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <MotiView
              from={{
                opacity: 0,
                translateX: -10,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                type: 'timing',
                duration: 800,
              }}
              style={{
                width: '90%',
                // borderRadius : 60,
                // overflow : 'hidden',
              }}>
              <TextInput
                activeOutlineColor={'#A9A9A9'}
                outlineColor={'#A9A9A9'}
                label="Zip Code"
                mode="outlined"
                selectionColor={colors.themeColor}
                theme={{
                  colors: {
                    primary: colors.themeColor,
                  },
                }}
                placeholderTextColor={'#A9A9A9'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                outlineStyle={{
                  // width : 2,
                  borderRadius: 14,
                  borderWidth: 0.5,
                  backgroundColor: colors.white,
                }}
                style={{
                  paddingHorizontal: 6,
                  borderRadius: 60,
             backgroundColor : "white"

                }}
              />
            </MotiView>
          )}
          name="zip_code"
          rules={{required: true}}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <MotiView
              from={{
                opacity: 0,
                translateX: -10,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                type: 'timing',
                duration: 800,
              }}
              style={{
                width: '90%',
                // borderRadius : 60,
                // overflow : 'hidden',
              }}>
              <TextInput
                activeOutlineColor={'#A9A9A9'}
                outlineColor={'#A9A9A9'}
                label="Occupation"
                mode="outlined"
                selectionColor={colors.themeColor}
                theme={{
                  colors: {
                    primary: colors.themeColor,
                  },
                }}
                placeholderTextColor={'#A9A9A9'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                outlineStyle={{
                  // width : 2,
                  borderRadius: 14,
                  borderWidth: 0.5,
                  backgroundColor: colors.white,
                }}
                style={{
                  paddingHorizontal: 6,
                  borderRadius: 60,
             backgroundColor : "white"

                }}
              />
            </MotiView>
          )}
          name="occupation"
          rules={{required: true}}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <MotiView
              from={{
                opacity: 0,
                translateX: -10,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                type: 'timing',
                duration: 800,
              }}
              style={{
                width: '90%',
                // borderRadius : 60,
                // overflow : 'hidden',
              }}>
              <TextInput
                activeOutlineColor={'#A9A9A9'}
                outlineColor={'#A9A9A9'}
                label="Refer Code"
                mode="outlined"
                selectionColor={colors.themeColor}
                theme={{
                  colors: {
                    primary: colors.themeColor,
                  },
                }}
                placeholderTextColor={'#A9A9A9'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                outlineStyle={{
                  // width : 2,
                  borderRadius: 14,
                  borderWidth: 0.5,
                  backgroundColor: colors.white,
                }}
                style={{
                  paddingHorizontal: 6,
                  borderRadius: 60,
             backgroundColor : "white"

                }}
              />

              <MotiPressable
              onPress={() => {
                showDatePicker()
              }}
                from={{
                  opacity: 0,
                  translateY: -10,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{
                  type: 'timing',
                  duration: 800,
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 6,
                  backgroundColor: '#ECC5FF',
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  borderRadius: 12,
                  marginTop: 15,
                }}>
                <AntDesign
                  name="calendar"
                  size={24}
                  color={colors.themeColor}
                />
                <Text
                  style={{
                    color: colors.themeColor,
                    fontSize: 16,
                  }}>
                  Choose birth date
                </Text>
              </MotiPressable>
              <MotiPressable
              onPress={() => {
                uploadVideo()
              }}
                from={{
                  opacity: 0,
                  translateY: -10,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{
                  type: 'timing',
                  duration: 800,
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  backgroundColor: '#fff',
                  borderWidth: 0.6,
                  borderColor: '#A9A9A9',
                  paddingVertical: 12,
                  // paddingHorizontal : 6,
                  borderRadius: 12,
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    color: '#A9A9A9',
                    fontSize: 13,
                  }}>
                  Upload Self Introduction Video
                </Text>
                <MaterialCommunityIcons
                  name={
                    videoAdded ? 'check-circle' : 'video-plus'
                  }
                  size={26}
                  color={colors.themeColor}
                />
              </MotiPressable>
            </MotiView>
          )}
          name="refer_code"
          rules={{required: true}}
          defaultValue=""
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            width: '90%',
          }}>
          <Checkbox
            onPress={() => setVaccinated(!vaccinated)}
            color="#430064"
            status={vaccinated ? 'checked' : 'unchecked'}
          />
          <Text
            style={{
              color: colors.black,
              fontSize: 14,
            }}>
            I am vaccinated
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            marginVertical: 20,
          }}>
          <LargeFillBtn
            title="Confirm"
            onPress={() => {
                navigation.navigate('SelectGender')
            }}
          />
        </View>
      </View>
    </MotiScrollView>
  );
};

export default ProfileSetup;

const styles = StyleSheet.create({});
