import React from 'react';
import { View, Text, StyleSheet, Pressable,Image } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
//Imgenes


export default function App() {

  const [Desaparece,Setdesaparece] = useState(true);

  const FirstFuntion = () =>{
  Setdesaparece(!Desaparece);

  };

  return (
    <View style = {Styles.View}>
      <StatusBar style='light' />
      
      <Text id='Text' style = { Desaparece ? Styles.Text : Styles.Text2}>
        Kupa
      </Text>
      
    </View>
  )
};
const Styles = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',    alignItems: 'center',
  },

  Text: {
    color: 'white',
    fontSize: 25,

  },
  Text2:{
    display: 'none'
  },
  Btn: {
    borderWidth: 1,
    borderColor: 'black',
    height: 30,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',

  }
})
