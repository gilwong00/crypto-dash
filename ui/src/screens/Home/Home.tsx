import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  Image
} from 'react-native';
import { styles } from './style';
import { images } from '../../constants';
import { Ionicons } from '@expo/vector-icons';
import { useCoins } from '../../hooks';
import { Coin } from '../../@types';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { data: coins, error, isFetching } = useCoins();
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.trendingItem,
          marginLeft: index === 0 ? 24 : 0
        }}
      >
        <View style={styles.coinContainer}>
          <Image
            source={{
              uri: item.logo
            }}
            resizeMode='cover'
            style={styles.coinImage}
          />

          <View style={{ marginLeft: 8 }}>
            <Text style={styles.coinName}>{item.name}</Text>
            <Text style={styles.coinSymbol}>{item.symbol}</Text>
          </View>
        </View>
        <View style={styles.coinValueContainer}>
          <Text style={styles.coinPrice}>
            ${item.quote.USD.price.toFixed(4)}
          </Text>
          <Text
            style={{
              ...styles.coinChange,
              color: item.quote.USD.percent_change_24h.toString().includes('-')
                ? 'red'
                : 'green'
            }}
          >
            {item.quote.USD.percent_change_24h.toFixed(4)}%
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (isFetching) return <ActivityIndicator size={25} />;

  return (
    <ScrollView style={styles.container}>
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
          {/* Header */}
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

          {/* Balance */}
          <View style={styles.balance}>
            <Text style={styles.balanceHeader}>Your Portfolio Balance is</Text>
            <Text style={styles.balanceAmount}>$2000</Text>
            <Text style={styles.balanceChangeText}>+ 1.25% Last 24 Hours</Text>
          </View>

          {/* Trending */}
          <View style={styles.trendingContainer}>
            <Text style={styles.trendingHeader}>Trending</Text>
            <FlatList
              contentContainerStyle={{ marginTop: 8 }}
              data={coins}
              renderItem={renderItem}
              keyExtractor={(item: Coin) => `${item.id}`}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Home;
