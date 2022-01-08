import React, { useEffect } from 'react';
import { ScrollView, ActivityIndicator, LogBox } from 'react-native';
import { styles } from './style';
import { useCoins, useTransactionHistory } from '../../hooks';
import { HomeHeader, Notice, TransactionHistory } from '../../components';

const Home: React.FC = () => {
  const { data: coins, error, isFetching } = useCoins();
  const {
    data: transactions,
    error: transactionError,
    isFetching: fetchingTransaction
  } = useTransactionHistory(11);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  if (isFetching || fetchingTransaction) return <ActivityIndicator size={25} />;

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <HomeHeader coins={coins} />
      <Notice />
      <TransactionHistory transactions={transactions} />
    </ScrollView>
  );
};

export default Home;
