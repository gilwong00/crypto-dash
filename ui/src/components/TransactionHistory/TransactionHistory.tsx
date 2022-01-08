import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style';
import { Transaction } from '../../@types';
import { COLORS } from '../../constants';

interface TransactionHistoryProps {
  transactions: Array<Transaction>;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  transactions
}) => {
  const renderItem = ({ item }: { item: Transaction }) => {
    return (
      <TouchableOpacity
        style={styles.transactionHistoryItem}
        onPress={() => console.log('clicked')}
      >
        <FontAwesome name='exchange' size={24} color={COLORS.primary} />
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionName}>
            {item.transactionType} {item.coinName}
          </Text>
          <Text style={styles.transactionDate}>
            {new Date(item.transactionDate).toDateString()}
          </Text>
        </View>
        <View style={styles.transactionAmountDetails}>
          <Text
            style={{
              ...styles.transactionAmount,
              color:
                item.transactionType === 'Bought' ? COLORS.green : COLORS.black
            }}
          >
            {item.transactionType === 'Sold' ? `-${item.amount}` : item.amount}
          </Text>
          <FontAwesome name='angle-right' size={30} color={COLORS.gray} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.transactionHistoryTitle}>Transaction History</Text>
      <FlatList
        contentContainerStyle={styles.transactionListContainer}
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item: Transaction) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={styles.transactionItemSeperator} />
        )}
      />
    </View>
  );
};

export default TransactionHistory;
