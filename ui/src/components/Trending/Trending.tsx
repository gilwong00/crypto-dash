import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Coin } from '../../@types';
import { styles } from './style';

interface TrendingProps {
  coins: Array<Coin>;
}

const Trending: React.FC<TrendingProps> = ({ coins }) => {
  const navigation = useNavigation();

  const renderItem = ({ item, index }: { item: Coin; index: number }) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.trendingItem,
          marginLeft: index === 0 ? 24 : 0
        }}
        onPress={() => navigation.navigate('Portfolio' as never)}
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
  return (
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
  );
};

export default Trending;
