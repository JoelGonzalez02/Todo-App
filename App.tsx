import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './store/store';
import { Provider } from 'react-redux';
import { ConnectedApp } from './screens/Main';

const Stack = createNativeStackNavigator();

const App: FC = () => {
  return (
    <Provider store={store()}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main' screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name='Main' component={ConnectedApp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;