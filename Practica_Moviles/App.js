import React from 'react';
import { StyleSheet, Text, View, ScrollView, Navigator } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './routes/Home.js';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Calendar: {screen: Calendar}

});

const App = createAppContainer(MainNavigator);

export default App;