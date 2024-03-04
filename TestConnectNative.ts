// If TestConnectNative is an package from npm, you can think this is index.js file
import { NativeModules, Platform } from 'react-native';

const testConnectNative = NativeModules.TestConnectNative;

const TestConnectNative = {
  sendMessage: (msg: string) => {
    testConnectNative.sendMessageToNative(msg);
  },

  sendCallback: (callback: Function) => {
    testConnectNative.sendCallbackToNative(callback);
  },

  exitRN: (tag: number) => {
    if (Platform.OS === 'ios') {
      testConnectNative.dismissViewController(tag);
    } else {
      testConnectNative.finishActivity();
    }
  },

  goToNative: (tag: number) => {
    if (Platform.OS === 'ios') {
      testConnectNative.goToSecondViewController(tag);
    } else {
      testConnectNative.goToSecondActivity();
    }
  },

  getToken: () => {
    // if (Platform.OS === 'ios') {
     return testConnectNative.getToken();
    // }
  },
};

export default TestConnectNative;
