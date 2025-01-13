import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

export default function Routes() {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
        {isLoggedIn ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}