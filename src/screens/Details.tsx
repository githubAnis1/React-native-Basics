import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Navigation - types
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../App'

//Navigation - moving between screens
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'




type DetailsProps = StackScreenProps<RootStackParamList,"Details"> // DetailsProps

const Details = ({route} :DetailsProps) => {
    const { porductId } = route.params

    const navigate = useNavigation<StackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>
      <Text>Details porductId : {porductId}</Text>
      <Button
        title='Go to detail screen'
        onPress={()=>navigate.navigate("Home")}
        //onPress={()=>navigation.push('Details',{porductId:"10"})}
        //onPress={()=>navigate.goBack()}
        //onPress={()=>navigate.pop(1)}
        //onPress={()=>navigate.popToTop()}
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})