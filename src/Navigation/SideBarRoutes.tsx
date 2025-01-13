import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Constants from "../Constants/constants"
import { HomeScreen } from '../Screens';

const Drawer = createDrawerNavigator();

export default function SideBarRoutes(){
    return(
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name={Constants.screenNames.HOME} component={HomeScreen}/>
    </Drawer.Navigator>
    )
}