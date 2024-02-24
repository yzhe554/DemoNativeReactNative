import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenOne} from './ScreenOne';
import {ScreenTwo} from './ScreenTwo';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

enum Screen {
  Screen1 = 'screen-one',
  Screen2 = 'screen-two',
}

type RootStackParamList = {
  [Screen.Screen1]: undefined;
  [Screen.Screen2]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type Props = {
  page: string;
};

export type StackNavigation = NavigationProp<RootStackParamList>;

export const Navigator = (props: Props) => {
  const navigation = useNavigation<StackNavigation>();
  useEffect(() => {
    console.log('props: ', props);
    if (props.page === 'router2') {
      navigation.navigate(Screen.Screen2);
    } else {
      navigation.navigate(Screen.Screen1);
    }
  }, [navigation, props]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.Screen1}
        component={ScreenOne}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Screen.Screen2}
        component={ScreenTwo}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
