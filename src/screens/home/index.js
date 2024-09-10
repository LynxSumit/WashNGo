import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MotiImage } from 'moti'
import { images } from '../../assets'
import LargeFillBtn from '../../components/LargeFillBtn'
import { useAuth } from '../../context/Auth.Context'
import { useNavigation } from '@react-navigation/native'

const index = () => {
    const {logout} = useAuth()
  return (
    <SafeAreaView style={{flex : 1}}>
      <View style={styles.container}>
        <MotiImage
            source={images.mainLogo}
            style={{
              width : 300,
              height : 300
            }}
            animation={{
              opacity: 1,
              translateX: 0
            }}
            spring={true}
  
        />

        <View style={{marginTop : 16, width : "80%"}}>
            <LargeFillBtn title="Logout" onPress={()=> {
               
                logout();

            }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
    }
})