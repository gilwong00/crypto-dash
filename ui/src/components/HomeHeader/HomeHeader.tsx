import React, { memo } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ImageBackground, TouchableOpacity, View, Text } from 'react-native';
import { images } from '../../constants';
import { styles } from './style';
import { Trending } from '../Trending';
import { Coin } from '../../@types';

interface HomeHeaderProps {
  coins: Array<Coin>;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ coins }) => {
  return (
    <View
      style={{
        width: '100%',
        height: 290,
        ...styles.shadow
      }}
    >
      <ImageBackground
        source={images.banner}
        resizeMode='cover'
        style={styles.backgroundImage}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons
              name='notifications-outline'
              size={24}
              color='white'
              style={{ flex: 1 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.balance}>
          <Text style={styles.balanceHeader}>Your Portfolio Balance is</Text>
          <Text style={styles.balanceAmount}>$2000</Text>
          <Text style={styles.balanceChangeText}>+ 1.25% Last 24 Hours</Text>
        </View>
        <Trending coins={coins} />
      </ImageBackground>
    </View>
  );
};

export default memo(HomeHeader);
