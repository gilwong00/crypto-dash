import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { styles } from './style';
import { useCoins } from '../../hooks';
import { HomeHeader, Notice, TransactionHistory } from '../../components';

const Home: React.FC = () => {
  const { data: coins, error, isFetching } = useCoins();

  if (isFetching) return <ActivityIndicator size={25} />;

  return (
    <ScrollView style={styles.container}>
      <HomeHeader coins={coins} />
      <Notice />
      <TransactionHistory />
    </ScrollView>
  );
};

export default Home;
