import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Menu from './rutas/menu.js'
import Perfil from './rutas/perfil.js'
import Agendar from './rutas/agendar.js'

const MainNavigator = createStackNavigator({
  Menu: {screen: Menu},
  Perfil : {screen: Perfil},
  Agendar : {screen: Agendar}
});

const App = createAppContainer(MainNavigator);

export default App;