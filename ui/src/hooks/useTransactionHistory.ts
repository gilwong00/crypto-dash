import axios from 'axios';
import { useQuery } from 'react-query';

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
  return {
    status,
    data,
    error,
    isFetching
  };
};

export default useTransactionHistory;
