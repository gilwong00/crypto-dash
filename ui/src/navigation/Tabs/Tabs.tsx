import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { COLORS, icons } from '../../constants';
import { Home } from '../../screens';
import { CustomTabBarButton } from '../../components';
import { styles } from './style';

const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'ios-home' : 'ios-home-outline';
              break;
            case 'Settings':
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
              break;
            case 'Prices':
              iconName = focused ? 'ios-cash' : 'ios-cash-outline';
              break;

            case 'Portfolio':
              iconName = focused ? 'ios-pie-chart' : 'ios-pie-chart-outline';
              break;
            default:
              break;
          }

          return route.name === 'Transactions' ? (
            <Image
              source={icons.transaction}
              resizeMode='contain'
              style={styles.transactionIcon}
            />
          ) : (
            <Ionicons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Portfolio' component={Home} />
      <Tab.Screen
        name='Transactions'
        component={Home}
        options={() => {
          return {
            tabBarButton: (props: BottomTabBarButtonProps) => (
              <CustomTabBarButton {...props} />
            ),
            tabBarLabel: () => null
          };
        }}
      />
      <Tab.Screen name='Prices' component={Home} />
      <Tab.Screen name='Settings' component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
