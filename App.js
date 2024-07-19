// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginScreen from './screens/loginScreen';
import IngresarDatosScreen from './screens/ingresarDatosScreen';
import InicioScreen from './screens/inicioScreen';
import NotificacionesScreen from './screens/notificacionesScreen';
import AyudaScreen from './screens/ayudaScreen';
import MasScreen from './screens/masScreen';

const AuthStack = createStackNavigator();
const AppStack = createBottomTabNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="IngresarDatos" component={IngresarDatosScreen} />
  </AuthStack.Navigator>
);

const AppStackScreen = () => (
  <AppStack.Navigator initialRouteName="Inicio">
    <AppStack.Screen 
      name="Inicio" 
      component={InicioScreen} 
      options={{
        tabBarLabel: 'Inicio',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} 
    />
    <AppStack.Screen 
      name="Notificaciones" 
      component={NotificacionesScreen} 
      options={{
        tabBarLabel: 'Notificaciones',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
      }} 
    />
    <AppStack.Screen 
      name="Ayuda" 
      component={AyudaScreen} 
      options={{
        tabBarLabel: 'Ayuda',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="help-circle" color={color} size={size} />
        ),
      }} 
    />
    <AppStack.Screen 
      name="Más" 
      component={MasScreen} 
      options={{
        tabBarLabel: 'Más',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="dots-horizontal" color={color} size={size} />
        ),
      }} 
    />
  </AppStack.Navigator>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default App;
