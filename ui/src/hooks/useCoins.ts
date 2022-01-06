import axios from 'axios';
import { useQuery } from 'react-query';

const useCoins = () => {
  const { status, data, error, isFetching } = useQuery('coins', async () => {
    const { data } = await axios.get(
      'http://localhost:5000/api/v1/currencies?page=1&limit=5'
    );
    return data;
  });

  return {
    status,
    data,
    error,
    isFetching
  };
};

export default useCoins;
