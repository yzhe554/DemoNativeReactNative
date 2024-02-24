/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  requireNativeComponent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TestConnectNative from './TestConnectNative';
import MapView from './MapView.tsx';

import {
  Colors,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

let rootTag = 1;

function App(props: any): React.JSX.Element {
  useEffect(() => {
    rootTag = props.rootTag;
  }, [props.rootTag]);
  const isDarkMode = useColorScheme() === 'dark';

  console.log('rootTag: ', rootTag);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={styles.sectionContainer}>
            <Pressable onPress={() => TestConnectNative.exitRN(rootTag)}>
              <Text>Back to native view</Text>
            </Pressable>

            <Pressable onPress={() => TestConnectNative.goToNative(rootTag)}>
              <Text>GO to another native view</Text>
            </Pressable>
            <View style={{flex: 1, height: 100, width: 100}}>
              <MapView style={{flex: 1}}/>
            </View>
          </View>
          {/* <LearnMoreLinks /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
