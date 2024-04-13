import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import type { PropsWithChildren } from 'react'
 

type CurrencyBtnProps = PropsWithChildren<{
    name:string;
    flag:string;
}>

const CurrencyBtn = ({ name, flag }: CurrencyBtnProps): JSX.Element => {

  return (
    <View style={styles.BtnContainer}>
      <Text style={styles.flag}>{flag}</Text>
      <Text style={styles.country}>{name}</Text>
    </View>
  )
}

export default CurrencyBtn

const styles = StyleSheet.create({
    BtnContainer:{
        alignItems:"center",
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 12,
        color: "#2d3436",
    }
})