// navigation/AppNavigator.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from '../screens/inicioScreen';
import NotificacionesScreen from '../screens/notificacionesScreen';
import AyudaScreen from '../screens/ayudaScreen';
import MasScreen from '../screens/masScreen';
import LoginScreen from '../screens/loginScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Inicio"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Inicio') {
                        iconName = 'home';
                    } else if (route.name === 'Notificaciones') {
                        iconName = 'bell';
                    } else if (route.name === 'Ayuda') {
                        iconName = 'help-circle';
                    } else if (route.name === 'Mas') {
                        iconName = 'dots-horizontal';
                    }
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 10,
                },
                tabBarLabelStyle: {
                    paddingBottom: 10,
                },
            })}
        >
            <Tab.Screen name="Inicio" component={InicioScreen} />
            <Tab.Screen name="Notificaciones" component={NotificacionesScreen} />
            <Tab.Screen name="Ayuda" component={AyudaScreen} />
            <Tab.Screen name="Mas" component={MasScreen} />
        </Tab.Navigator>
    );
}

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Inicio" component={TabNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
