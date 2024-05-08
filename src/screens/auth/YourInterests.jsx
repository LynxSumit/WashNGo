import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MotiScrollView, MotiView } from 'moti'
import { Appbar } from 'react-native-paper'
import { colors } from '../../constants/colors'
import { MotiPressable } from 'moti/interactions'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LargeFillBtn from '../../components/LargeFillBtn'
import { useNavigation } from '@react-navigation/native'

const YourInterests = () => {
    const navigation = useNavigation()
    const interests = [
        { name: "Music", id: 1 },
        { name: "Reading", id: 2 },
        { name: "Traveling", id: 3 },
        { name: "Painting", id: 4 },
        { name: "Writing", id: 5 },
        { name: "Cooking", id: 6 },
        { name: "Hiking", id: 7 },
        { name: "Photography", id: 8 },
        { name: "Gardening", id: 9 },
        { name: "Knitting", id: 10 },
        { name: "Baking", id: 11 },
        { name: "Puzzles", id: 12 },
        { name: "Dancing", id: 13 },
        { name: "Yoga", id: 14 },
        { name: "Meditation", id: 15 },
        { name: "Running", id: 16 },
        { name: "Cycling", id: 17 },
        { name: "Swimming", id: 18 },
        { name: "Fishing", id: 19 },
        { name: "Camping", id: 20 },
        { name: "Skiing", id: 21 },
        { name: "Surfing", id: 22 },
        { name: "Rock Climbing", id: 23 },
        { name: "Bird Watching", id: 24 },
        { name: "Pottery", id: 25 },
        { name: "Origami", id: 26 },
        { name: "Astronomy", id: 27 },
        { name: "Magic Tricks", id: 28 },
        { name: "Chess", id: 29 },
        { name: "Video Games", id: 30 },
    ];

    const [myInterests, setMyInterests] = useState([]);
  return (
    <MotiScrollView style={{
        flex : 1,
        backgroundColor : 'white',

    }}
    contentContainerStyle={{
        alignItems : 'center',
      
    
    }}
    >
    <Appbar.Header style={{
        backgroundColor : 'white',
        width : Dimensions.get('window').width,
        elevation : 0
    }}>
        <Appbar.BackAction iconColor='black' onPress={() => {
            navigation.goBack()
        }} />
        </Appbar.Header>

    <View style={{
alignSelf : 'flex-start',
marginHorizontal : 20,
marginTop : 20
    }}>
        <Text style={{
            fontSize : 35,
            fontWeight : '600',
            color : colors.themeColor
        
        }}>
        My leisure activities
        </Text>
        <Text style={{
            fontSize : 16,
            color : colors.black,
            marginTop : 10
        
        }}>
        Please select 10 of your most favored interests.
        </Text>
    </View>

    <View style={{
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center',
        marginTop : 20,
        marginHorizontal : 20,
       
    }}>

        {interests.map((item, index) => {
            const isSelected = myInterests.find((i) => i.id === item.id);

        console.log(isSelected)
          return  <View key={index} style={{
                width : '45%',
                margin : 5

            }}>
            <MotiPressable
            onPress={
                () => {
                  if(isSelected){
                        setMyInterests(myInterests.filter((i) => i.id !== item.id))
                  }else{
                        if(myInterests.length < 10){
                            setMyInterests([...myInterests, item])
                        }
                  }
                }
            }
            key={index}
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
                duration : 1000,
                delay : index * 100
            }}
            style={{
                backgroundColor : isSelected ? colors.themeColor : 'white',
               flexDirection : 'row',
               borderColor : isSelected ? colors.themeColor : 'black',
                borderWidth :  1,
                justifyContent : 'space-around',
                alignItems : 'center',
                borderRadius : 10,
                
                padding : 10,
            }}
            >
           {isSelected && <AntDesign name={
                isSelected && 'check' 
            } size={20} color='white' />}
                <Text style={{
                    color : isSelected ? 'white' : 'black',
                    fontSize : 14,
                    fontWeight : '500'
                }}>{item.name}</Text>
            </MotiPressable>
            </View>
        })}

    </View>

    <View
          style={{
            width: '90%',
            marginVertical: 20,
          }}>
          <LargeFillBtn
            title="Continue"
            onPress={() => {
                navigation.navigate('Introduction')
            }}
          />
        </View>



    </MotiScrollView>
  )
}

export default YourInterests

const styles = StyleSheet.create({})