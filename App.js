import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';


const Tab = createBottomTabNavigator();


const App = () => {

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Screen1}
            options={
              {
                tabBarIcon: ({ focused, color, size }) => {
                  return <Text style={{ fontSize: size, color: color }}>🏠</Text>
                }
              }
            }
          />
          <Tab.Screen name="Settings" component={Screen2}
            options={
              {
                tabBarIcon: ({ focused, color, size }) => {
                  return <Text style={{ fontSize: size, color: "purple" }}>⚙️</Text>
                }
              }
            }
          />

        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;