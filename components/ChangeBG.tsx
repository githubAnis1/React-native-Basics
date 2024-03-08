import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'




const ChangeBG = ({changeBg}) => {

  return (
    <View>
      <TouchableOpacity
       style={styles.changeBgBtn}
       onPress={changeBg}
      >
        <Text style={styles.changeBgBtnText}>Random Backgound</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChangeBG

const styles = StyleSheet.create({
    changeBgBtn:{
        backgroundColor:"#aaa",
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:6,
        width:"50%",
        marginHorizontal:"25%"
    },
    changeBgBtnText:{
      textAlign:"center",
      color:"white"
    }
})