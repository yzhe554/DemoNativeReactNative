import React from 'react';
import { View, ViewStyle } from 'react-native';

type DividerProps = {
  style?: ViewStyle;
};

export const Divider = ({ style = {} }: DividerProps) => (
  <View
    style={{
      borderTopColor: '#E2E8F0',
      borderTopWidth: 6,
      ...style,
    }}
  />
);
