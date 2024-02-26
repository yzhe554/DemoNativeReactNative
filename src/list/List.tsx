import React from 'react';
import { View } from 'react-native';

type ListProps = {
  children: React.ReactNode;
};

export const List = ({ children }: ListProps) => <View>{children}</View>;
