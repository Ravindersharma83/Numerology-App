import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './src/Screens/LoginScreen/LoginScreen'
import RegisterScreen from './src/Screens/RegisterScreen/RegisterScreen'

const App = () => {
  return (
    <View style={{ flex: 1}}>
      {/* <LoginScreen/> */}
      <RegisterScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})