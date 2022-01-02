import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, icons } from './constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from './screens';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = (props: BottomTabBarButtonProps) => {
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

export default function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  transactionIcon: {
    width: 30,
    height: 30,
    tintColor: COLORS.white
  },
  linearGradient: {
    width: 60,
    height: 60,
    borderRadius: 30
  }
});
