import React from 'react';
import { Pressable, View, ViewStyle } from 'react-native';

type ListItemProps = {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  lines?: React.ReactNode;
  action?: React.ReactNode;
  onAction?: () => void;
  style?: ViewStyle;
};

export const ListItem = ({
  icon,
  title,
  lines,
  action,
  style = {},
  onAction = () => {},
}: ListItemProps) => (
  <View style={{ flexDirection: 'row', ...style }}>
    {icon || null}
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {title}
      {lines || null}
    </View>
    {action ? (
      <Pressable
        style={{ justifyContent: 'center', marginRight: 16 }}
        onPress={onAction}>
        {action}
      </Pressable>
    ) : null}
  </View>
);
