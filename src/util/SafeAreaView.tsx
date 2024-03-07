import { ScrollView } from 'moti';
import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type SafeAreaViewProps = {
  children: ReactNode;
  style: ViewStyle;
};

export const SafeAreaView = ({ children, style }: SafeAreaViewProps) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      // contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        // justifyContent: 'space-between',
        // alignItems: 'center',
        paddingTop: 0,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        ...style,
      }}>
      {children}
    </ScrollView>
  );
};
