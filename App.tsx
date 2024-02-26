/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './Navigator';
import 'react-native-reanimated';
import 'react-native-gesture-handler';

export let rootTag = 1;

function App(props: any): React.JSX.Element {
  useEffect(() => {
    rootTag = props.rootTag;
  }, [props.page, props.rootTag]);

  console.log('rootTag: ', rootTag);

  return (
    <NavigationContainer>
      <Navigator page={props.page} />
    </NavigationContainer>
  );
}

export default App;
