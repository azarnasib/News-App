import react from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/Screens/SplashScreen/Splash.screen";
import HomeScreen from "./src/Screens/HomeScreen/Home.screen";
import NewsScreen from "./src/Screens/NewsScreen/News.screen";

function App() {
  const Stack=createStackNavigator();
  const MainNavigator=()=>{
     return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen
          name="Splash"
          component={SplashScreen}
          />
         <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
       <Stack.Screen
        name="News"
        component={NewsScreen}
       />

      </Stack.Navigator>

    )
  }
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  )
}

export default App;