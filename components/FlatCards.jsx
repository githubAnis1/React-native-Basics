import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
        <View style={styles.container}>
            <View style={[styles.card , {backgroundColor: "lightblue"}]}>
                <Text style={styles.title}> blue</Text>
            </View>
            <View style={[styles.card , {backgroundColor: "coral"}]}>
                <Text style={styles.title}> orange</Text>
            </View>
            <View style={[styles.card , {backgroundColor: "#aaa"}]}>
                <Text style={styles.title}> gray</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
    },
    title:{
        color:"white"
    },
    card : {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:100,
        height:100,
        margin:10
    },
})