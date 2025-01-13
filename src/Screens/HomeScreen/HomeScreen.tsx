import {View } from 'react-native';
import React from 'react';
import styles from './styles';
import { Button } from '../../Components';
import * as Constants from "../../Constants/constants";

const HomeScreen = ({navigation}:any) => {    
  return (
    <View style={styles.container}>
      <Button onPress={()=>navigation.navigate(Constants.screenNames.ADD_CLIENT)} btnText='Add Client' btnStyle={styles.btnStyle}/>
    </View>
  )
}
export default HomeScreen