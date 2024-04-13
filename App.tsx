import { StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Text,View } from 'react-native';
//import FancyCard from './components/FancyCard';
//import PasswordGenerator from './components/PasswordGenerator';
//import ChangeBG from './components/ChangeBG';
import React, { useState } from 'react';
import * as Haptics from 'expo-haptics';
//import Currency from './src/currency';
//import TicTacToe from './src/TicTacToe';

//Providers
import {Root as PopupRootProvider} from 'react-native-popup-confirm-toast';
import { PaperProvider } from 'react-native-paper';

//Navigation
import { NavigationContainer } from '@react-navigation/native';//wrapper
import { createStackNavigator } from '@react-navigation/stack';//navigation type i choose
import 'react-native-gesture-handler';

//Screens
import { Details, Home } from './src/screens';
import ChangeBG from './components/ChangeBG';
import FancyCard from './components/FancyCard';
import PasswordGenerator from './components/PasswordGenerator';
import Currency from './src/currency';
import TicTacToe from './src/TicTacToe';




// A type checking
export type RootStackParamList = {
  Home: undefined;
  Details: { porductId: string };
};

// choose Stack as navigation type - recieve RootStackParamList
const Stack = createStackNavigator<RootStackParamList>();



export default function App(){

  // const isDarkMode = useColorScheme() === "dark"
  const [backGound, setBackGound] = useState("#dddddd")
  const changeBg = () => {
    let hexCode="0123456789abdcef"
    let hexBg =''
    for (let i = 0; i < 6; i++) {// take 6 digits
      hexBg += hexCode.charAt(Math.round(Math.random() * 16))// must be in range of hexadecimal
    }
    setBackGound(`#${hexBg}`)
    // Trigger haptic feedback
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home' 
          component={Home}
          options={{
            title:"Trending Products"
          }}
        />
        <Stack.Screen
          name='Details' 
          component={Details}
          options={{
            title:"Product's Details"
          }}
        />
        {/* <PopupRootProvider>
          <SafeAreaView style={{backgroundColor: backGound}}>

              <ChangeBG changeBg={changeBg}/>
              <ScrollView horizontal>
              {// creating an array with four undefined elements and then using map to replace each undefined element with a FancyCard component.
              [...Array(3)].map((_, index) => <FancyCard key={index}/>)}
              </ScrollView>
              <PasswordGenerator/> 
              <Currency/> 
              <TicTacToe/>

          </SafeAreaView>
        </PopupRootProvider> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({}) 