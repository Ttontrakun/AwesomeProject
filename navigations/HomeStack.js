import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/week6/Home';
import Ex01 from '../screens/week2/Ex01';
import Ex02 from '../screens/week2/Ex02';
import Ex03 from '../screens/week2/Ex03';
import Ex04 from '../screens/week2/Ex04';
import Ex05 from '../screens/week2/Ex05';
import Ex06 from '../screens/week2/Ex06';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="Ex01"
        component={Ex01}
        options={{ title: "Exercise 1" }}
      />
      <Stack.Screen
        name="Ex02"
        component={Ex02}
        options={{ title: "Exercise 2" }}
      />
      <Stack.Screen
        name="Ex03"
        component={Ex03}
        options={{ title: "Exercise 3" }}
      />
      <Stack.Screen
        name="Ex04"
        component={Ex04}
        options={{ title: "Exercise 4" }}
      />
      <Stack.Screen
        name="Ex05"
        component={Ex05}
        options={{ title: "Exercise 5" }}
      />
      <Stack.Screen
        name="Ex06"
        component={Ex06}
        options={{ title: "Exercise 6" }}
      />
    </Stack.Navigator>
  );
}
