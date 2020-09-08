/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import Home from './Components/Home';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          {_funScreen('Home', Home, 'home')}
          {_funScreen('Home1', Home, 'television',6)}
          {_funScreen('Home2', Home, 'user-circle')}
          {_funScreen('Home3', Home, 'heart-o',2)}
          {_funScreen('Home4', Home, 'bell-o',4)}
          {_funScreen('Home5', Home, 'navicon')}
        </Tab.Navigator>
      </NavigationContainer>
  );
};

_funScreen = (_name, _component, _iconName, number) => {
  return (
    <Tab.Screen
      name={_name}
      component={_component}
      options={{
        tabBarBadge: number,
        tabBarLabel: () => {
          return null;
        },
        tabBarIcon: () => <FontAweSome name={_iconName} size={24} />,
      }}
    />
  );
};

export default App;
