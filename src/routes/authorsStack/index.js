// Imports
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// App Imports
import Authors from '../../modules/authors/AuthorsList';
import Posts from '../../modules/posts/PostList';
import names from '../names';

const Stack = createStackNavigator();

export default function AuthorsStack() {
  return (
    <Stack.Navigator
      initialRouteName={names.AUTHORS}
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 0,
        },
      }}
    >
      <Stack.Screen name={names.AUTHORS} component={Authors} />
      <Stack.Screen name={names.POSTS} component={Posts} />
    </Stack.Navigator>
  );
}
