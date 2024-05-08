import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar, RadioButton, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../constants/colors'
import { MotiScrollView } from 'moti'
import LargeFillBtn from '../../components/LargeFillBtn'

const Introduction = () => {
    const navigation = useNavigation()
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
marginTop : 20,
width : '100%'
    }}>
        <Text style={{
            fontSize : 35,
            fontWeight : '600',
            color : colors.themeColor
        
        }}>
       Introduce yourself!
        </Text>

        <TextInput
        mode='outlined'
        multiline
        numberOfLines={8}
        activeOutlineColor='#9A9A9A'
        outlineColor='#9A9A9A'

        outlineStyle={{
            borderRadius : 12
        }}

        style={{
            width : '90%',
            marginTop : 20,
            backgroundColor : 'white',
            
            
            
        }}

        />
        <Text style={{
            fontSize : 12,
            color : "#9A9A9A",
            marginTop : 10
        
        
        }}>Minimum 50 characters up to 500</Text>
        
    </View>
        <View style={{
alignSelf : 'flex-start',
marginHorizontal : 20,
marginTop : 20,
width : '100%'
    }}>

<Text style={{
            fontSize : 16,
            color : colors.black,
            marginTop : 20,
            width : '85%'
        
        
        }}>1. If you can do anything and not be paid, what would you do?</Text>
       

        <TextInput
        mode='outlined'
        multiline
        numberOfLines={8}
        activeOutlineColor='#9A9A9A'
        outlineColor='#9A9A9A'

        outlineStyle={{
            borderRadius : 12
        }}

        style={{
            width : '90%',
            marginTop : 8,
            backgroundColor : 'white',
            
            
            
        }}

        />
        
        
    </View>
        <View style={{
alignSelf : 'flex-start',
marginHorizontal : 20,
marginTop : 20,
width : '100%'
    }}>

<Text style={{
            fontSize : 16,
            color : colors.black,
            marginTop : 20,
            width : '85%'
        
        
        }}>2. What would you want to be most remembered for?</Text>
       

        <TextInput
        mode='outlined'
        multiline
        numberOfLines={8}
        activeOutlineColor='#9A9A9A'
        outlineColor='#9A9A9A'

        outlineStyle={{
            borderRadius : 12
        }}

        style={{
            width : '90%',
            marginTop : 8,
            backgroundColor : 'white',
            
            
            
        }}

        />
        
        
    </View>
        <View style={{
alignSelf : 'flex-start',
marginHorizontal : 20,
marginTop : 20,
width : '100%'
    }}>

<Text style={{
            fontSize : 16,
            color : colors.black,
            marginTop : 20,
            width : '85%'
        
        
        }}>3. If you could write a book, what would you write about?</Text>
       

        <TextInput
        mode='outlined'
        multiline
        numberOfLines={8}
        activeOutlineColor='#9A9A9A'
        outlineColor='#9A9A9A'

        outlineStyle={{
            borderRadius : 12
        }}

        style={{
            width : '90%',
            marginTop : 8,
            backgroundColor : 'white',
            
            
            
        }}

        />
        
        
    </View>

    <View style={{
alignSelf : 'flex-start',
marginHorizontal : 20,
marginTop : 20,
width : '100%'
    }}>
        <Text style={{
            fontSize : 22,
            fontWeight : '500',
            color : colors.themeColor,
            marginBottom:  8
        
        }}>
       You are ?
        </Text>

       <View style={{
        paddingLeft : 16
       }}>
<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap:  8,
}}>

         <RadioButton
            value="first"
            status='checked'
            color={colors.themeColor}
            uncheckedColor={colors.lightGrey}
        />
        <Text
        style={{
            fontSize : 16,
            color : colors.black
        }}
        >
            Single
        </Text>
</View>
<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap:  8,
}}>

         <RadioButton
            value="first"
            status='checked'
            color={colors.themeColor}
            uncheckedColor={colors.lightGrey}
        />
        <Text
        style={{
            fontSize : 16,
            color : colors.black
        }}
        >
            Divorced
        </Text>
</View>
<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap:  8,
}}>

         <RadioButton
            value="first"
            status='checked'
            color={colors.themeColor}
            uncheckedColor={colors.lightGrey}
        />
        <Text
        style={{
            fontSize : 16,
            color : colors.black
        }}
        >
            Widowed
        </Text>
</View>
<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap:  8,
}}>

         <RadioButton
            value="first"
            status='checked'
            color={colors.themeColor}
            uncheckedColor={colors.lightGrey}
        />
        <Text
        style={{
            fontSize : 16,
            color : colors.black
        }}
        >
     Married- Separated
        </Text>
</View>
<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap:  8,
}}>

         <RadioButton
            value="first"
            status='unchecked'
            color={colors.themeColor}
            uncheckedColor={colors.lightGrey}
        />
        <Text
        style={{
            fontSize : 16,
            color : colors.black
        }}
        >
     Married- Happily
        </Text>
</View>

       
        
       </View>
       
        
    </View>
    <View style={{
alignSelf : 'flex-start',
marginHorizontal : 20,
marginTop : 20,
width : '100%'
    }}>
        <Text style={{
            fontSize : 22,
            fontWeight : '500',
            color : colors.themeColor,
            marginBottom:  8
        
        }}>
       You have ?
        </Text>

       <View style={{
        paddingLeft : 16
       }}>
<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap:  8,
}}>

         <RadioButton
            value="first"
            status='unchecked'
            color={colors.themeColor}
            uncheckedColor={colors.lightGrey}
        />
        <Text
        style={{
            fontSize : 16,
            color : colors.black
        }}
        >
            No Kids
        </Text>
</View>
<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap:  8,
}}>

         <RadioButton
            value="first"
            status='checked'
            color={colors.themeColor}
            uncheckedColor={colors.lightGrey}
        />
        <Text
        style={{
            fontSize : 16,
            color : colors.black
        }}
        >
            Kids that live with you full time
        </Text>
</View>
<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap:  8,
}}>

         <RadioButton
            value="first"
            status='unchecked'
            color={colors.themeColor}
            uncheckedColor={colors.lightGrey}
        />
        <Text
        style={{
            fontSize : 16,
            color : colors.black
        }}
        >
            Kids that live with you part time
        </Text>
</View>
<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap:  8,
}}>

         <RadioButton
            value="first"
            status='checked'
            color={colors.themeColor}
            uncheckedColor={colors.lightGrey}
        />
        <Text
        style={{
            fontSize : 16,
            color : colors.black
        }}
        >
Prefer not to say        </Text>
</View>


       
        
       </View>
       
        
    </View>
    <View style={{
alignSelf : 'flex-start',
marginHorizontal : 20,
marginTop : 20,
width : '100%'
    }}>
        <Text style={{
            fontSize : 22,
            fontWeight : '500',
            color : colors.themeColor,
            marginBottom:  8
        
        }}>
     Do you consider yourself:
        </Text>

       <View style={{
        paddingLeft : 16
       }}>
<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap:  8,
}}>

         <RadioButton
            value="first"
            status='unchecked'
            color={colors.themeColor}
            uncheckedColor={colors.lightGrey}
        />
        <Text
        style={{
            fontSize : 16,
            color : colors.black
        }}
        >
        Blue Collar
        </Text>
</View>
<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap:  8,
}}>

         <RadioButton
            value="first"
            status='checked'
            color={colors.themeColor}
            uncheckedColor={colors.lightGrey}
        />
        <Text
        style={{
            fontSize : 16,
            color : colors.black
        }}
        >
            White Collar
        </Text>
</View>



       
        
       </View>
       
        
    </View>
    <View style={{
alignSelf : 'flex-start',
marginHorizontal : 20,
marginTop : 20,
width : '100%'
    }}>
        <Text style={{
            fontSize : 22,
            fontWeight : '500',
            color : colors.themeColor,
            marginBottom:  8
        
        }}>
    Do you consider yourself:
        </Text>

       <View style={{
        paddingLeft : 16
       }}>
<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap:  8,
}}>

         <RadioButton
            value="first"
            status='checked'
            color={colors.themeColor}
            uncheckedColor={colors.lightGrey}
        />
        <Text
        style={{
            fontSize : 16,
            color : colors.black
        }}
        >
       Introverted
        </Text>
</View>
<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap:  8,
}}>

         <RadioButton
            value="first"
            status='checked'
            color={colors.themeColor}
            uncheckedColor={colors.lightGrey}
        />
        <Text
        style={{
            fontSize : 16,
            color : colors.black
        }}
        >
         Extroverted
        </Text>
</View>
<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap:  8,
}}>

         <RadioButton
            value="first"
            status='unchecked'
            color={colors.themeColor}
            uncheckedColor={colors.lightGrey}
        />
        <Text
        style={{
            fontSize : 16,
            color : colors.black
        }}
        >
         Extroverted
        </Text>
</View>



       
        
       </View>
       
        
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

export default Introduction

const styles = StyleSheet.create({})