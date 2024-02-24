import React, {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import TestConnectNative from './TestConnectNative';
import {MapView} from './MapView';
import {rootTag} from './App';

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

export const ScreenOne = () => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>Screen One From RN</Text>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.lighter} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: Colors.lighter,
          }}>
          <View style={styles.sectionContainer}>
            <Pressable onPress={() => TestConnectNative.exitRN(rootTag)}>
              <Text>Back to native view</Text>
            </Pressable>

            <Pressable onPress={() => TestConnectNative.goToNative(rootTag)}>
              <Text>GO to another native view</Text>
            </Pressable>
            <View style={{flex: 1, height: 100, width: 100}}>
              <MapView style={{flex: 1}} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
