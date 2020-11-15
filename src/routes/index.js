// Imports
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// App Imports
import AuthorsStack from './authorsStack';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthorsStack" component={AuthorsStack} />
    </Stack.Navigator>
  );
}
