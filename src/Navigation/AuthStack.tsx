import * as React from 'react';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import * as Constants from '../Constants/constants'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterScreen } from '../Screens';

const Stack = createNativeStackNavigator();

export default function AuthStack(){
    return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={Constants.screenNames.LOGIN} component={LoginScreen}/>
        <Stack.Screen options={{headerShown:false}} name={Constants.screenNames.REGISTER} component={RegisterScreen}/>
    </Stack.Navigator>
    )
}