import React from 'react';

// Agrupa e gerencia todas as rotas da aplicação
import { NavigationContainer } from '@react-navigation/native';

// Cria uma pilha de navegação, historico de navegação
import { createStackNavigator } from '@react-navigation/stack';

/**
 * screenOptions={{}} -> utilizando um objeto jacaScript
 */
const Stack = createStackNavigator();

import Home from './pages/Home';
import CreateRecord from './pages/CreateRecord';

const Routes = () => {
   return (
    <NavigationContainer>
        <Stack.Navigator 
           headerMode="none"
           screenOptions={{
               cardStyle : {
                backgroundColor: '#0B1F34',
               }
           }}
           >
           <Stack.Screen name="Home" component={Home}/>
           <Stack.Screen name="CreateRecord" component={CreateRecord}/>

        </Stack.Navigator>
    </NavigationContainer>
   )
};

export default Routes;