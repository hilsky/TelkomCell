import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AddData from './AddData';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewData from './ViewData';
import DetailData from './DetailData';
import Home from './Home';
import SplashScreen from './SplashScreen';
import Login from './Login';
import Register from './Register';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="AddData" component={AddData} />
        <Stack.Screen name="ViewData" component={ViewData} />
        <Stack.Screen name="DetailData" component={DetailData} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}