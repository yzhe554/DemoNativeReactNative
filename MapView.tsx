import {ViewStyle, requireNativeComponent} from 'react-native';

interface Props {
  style: ViewStyle;
}

export const MapView = requireNativeComponent<Props>('RNTMap');
