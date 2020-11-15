// Imports
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

// App Imports
import Routes from './routes';
import store from './store';
import routesTheme from './routes/routesTheme';

export default function App() {
  return (
    <Provider store={store} key="provider">
      <NavigationContainer theme={routesTheme}>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
