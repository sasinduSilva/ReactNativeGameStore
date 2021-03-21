import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./app/components/screens/HomeScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const TabNavScreen = () => {
  return(
    <TabNav.Navigator>
      <TabNav.Screen name="HomeScreen" component={HomeScreen} />
    </TabNav.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="App" component={TabNavScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}


