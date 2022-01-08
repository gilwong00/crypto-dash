import axios from 'axios';
import { useQuery } from 'react-query';
import { Transaction } from '../@types';

const useTransactionHistory = (userId: number) => {
  const { status, data, error, isFetching } = useQuery(
    `transaction-${userId}`,
    async () => {
      const { data } = await axios.get(
        'http://localhost:5000/api/v1/transaction'
      );
      return data;
    }
  );

  const mock: Array<Transaction> = [
    {
      transactionType: 'Sold',
      coinName: 'Doge',
      amount: 0.54325,
      transactionDate: new Date().toISOString(),
      id: 1,
      userId: 11
    },
    {
      transactionType: 'Bought',
      coinName: 'BitCoin',
      amount: 12645,
      transactionDate: new Date().toISOString(),
      id: 2,
      userId: 11
    }
  ];
  return {
    status,
    data: mock,
    error,
    isFetching
  };
};

export default useTransactionHistory;
