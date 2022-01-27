import { NavigationContainer } from '@react-navigation/native';
import { Alert } from 'react-native';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Tabs, Auth } from './src/navigation';

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
        {/* <Tabs /> */}
        <Auth />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
