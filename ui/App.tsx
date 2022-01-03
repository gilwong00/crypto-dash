import { NavigationContainer } from '@react-navigation/native';
import { Alert } from 'react-native';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Tabs } from './navigation';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 60 * 1000 * 5
    },
    mutations: {
      onError: (e: any) => {
        if ('message' in e) {
          Alert.alert('ERROR', (e as Error).message);
        }
      }
    }
  }
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
