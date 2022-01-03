import React from 'react';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';
import { styles } from './style';

const CustomTabBarButton: React.FC<BottomTabBarButtonProps> = props => {
  return (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: 'center',
        ...styles.shadow
      }}
      onPress={props.onPress}
    >
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={styles.linearGradient}
      >
        {props.children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomTabBarButton;
