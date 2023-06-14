import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: 'Tela inicio',
          headerStyle:{
            backgroundColor: '#121212'
          },

          headerTintColor: '#fff',
          headerShown: false,
        }}
        />

        <Stack.Screen 
        name="Sobre" 
        component={Sobre} 
        options={{
          title:'Pagina Sobre'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}