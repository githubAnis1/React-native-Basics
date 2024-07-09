import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Navigation - types
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../App'

type HomeProps = StackScreenProps<RootStackParamList,"Home"> // HomeProps

const Home = ({navigation} :HomeProps) => {

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title='Go to detail screen'
        onPress={()=>navigation.navigate('Details', { porductId:"10" })}
        //onPress={()=>navigation.push('Details',{porductId:"10"})}
        //onPress={()=>navigation.replace("Details",{porductId:"10"})} here we 
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
})