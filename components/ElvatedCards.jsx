import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ElvatedCards() {
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>ElvatedCards</Text>
      <ScrollView horizontal style={styles.cardsElevated}>
          <View style={[styles.card , {backgroundColor: "lightblue"}]}>
            <Text>card</Text>
          </View>
          <View style={[styles.card , {backgroundColor: "lightblue"}]}>
            <Text>card</Text>
          </View>
          <View style={[styles.card , {backgroundColor: "lightblue"}]}>
            <Text>card</Text>
          </View>
          <View style={[styles.card , {backgroundColor: "lightblue"}]}>
            <Text>card</Text>
          </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      gap:10,
      margin:10,
      color:"red",
    },
  heading:{
      color:"coral"
    },
  card : {
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:"6px",
      width:130,
      height:130,
      margin:10,
  },
  cardsElevated:{
    shadowOffset : {
      width:1,
      height:1
    },
    shadowColor:"#333",
    shadowOpacity:0.4,
    shadowRadius:2
  }
})