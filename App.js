import React from 'react'
import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreeen from './src/screens/HomeScreen'
import WorkingScreen from './src/screens/WorkingScreen'
import Header from './src/components/Header'
import SplashScreen from './src/screens/SplashScreen'
const navigator = createStackNavigator(
  {
  Splash:SplashScreen,
  Home: HomeScreeen,
  Working: WorkingScreen
},
{
  initialRouteName: 'Splash',
  defaultNavigationOptions: {
    headerTitle: ()=> <Header />,
    headerLeft: null,
  }
});

export default createAppContainer(navigator);