import React from 'react';
import { View , Text } from 'react-native';

import Home from './pages/Home/index';
import Cart from './pages/Cart/index';
import Products from   './pages/Products/index';

import Icon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
      
            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Products':
                iconName = 'tag';
                break;
              case 'Cart':
                iconName = 'shopping-cart';
                break;
                default:
                iconName = 'circle';
                break;
            }
      
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'yellow',
          inactiveTintColor: 'blue',
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Products" component={Products} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}