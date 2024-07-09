import { StyleSheet, Text, View, TextInput, FlatList, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'

//constants
import { currencyByDzd } from './constants'
//components
import CurrencyBtn from './components/CurrencyBtn'
import {Popup} from 'react-native-popup-confirm-toast'




const Currency = () :JSX.Element => {

  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const convert = (targetValue :currency) => {
    if(!inputValue) {
       Popup.show({
        type: 'info',
        title: 'oops !',
        textBody: 'Enter a value tocconvert',
        buttonText: 'OK',
        callback: () => Popup.hide()
      })
      return;
    }
    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) { // is a number
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      //return console.log('Enter number');
      return Popup.show({
        type: 'info',
        title: 'oops !',
        textBody: 'Enter number',
        buttonText: 'OK',
        callback: () => Popup.hide()
      })
    }
  } 
  
  return (
    <View style={styles.body}>
      <Text>Currency</Text>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.dzdContainer}>
            <Text style={styles.dzd}>DZD</Text>
            <TextInput
              maxLength={14}
              style={{width:"37%"}}
              value={inputValue}
              clearButtonMode='always' // only for ios
              onChangeText={setInputValue}
              keyboardType="number-pad"
              placeholder='Amount in DZD'
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
            <FlatList
              numColumns={3}
              data={currencyByDzd}
              keyExtractor={item => item.name}
              renderItem={({item})=>
                <Pressable
                  style={[
                    styles.button,
                    targetCurrency === item.name && styles.selected
                  ]}
                  onPress={()=>convert(item)}
                >
                  <CurrencyBtn {...item}/>
                </Pressable>
              }
            />
        </View>
      </View>
    </View>
  )
}

export default Currency

const styles = StyleSheet.create({
  body:{
    height:"100%"
  },
  container: {
    flex: 1,
    margin:10,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  dzd: {
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  dzdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
})