import * as React from 'react';
import * as Constants from '../Constants/constants'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SideBarRoutes from './SideBarRoutes';
import { AddClientScreen } from '../Screens';
const Stack = createNativeStackNavigator();
export default function HomeStack(){
    return(
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name={Constants.screenNames.SIDEBAR_ROUTES} component={SideBarRoutes}/>
        <Stack.Screen name={Constants.screenNames.ADD_CLIENT} component={AddClientScreen}/>
    </Stack.Navigator>
    )
}