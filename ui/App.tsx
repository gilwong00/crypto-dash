import shallow from 'zustand/shallow';
import { NavigationContainer } from '@react-navigation/native';
import { Alert } from 'react-native';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Tabs, Auth } from './src/navigation';
import { userStore } from './src/store';

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
  const user = userStore(s => s.user, shallow);
  // do a whoami lookup

  // return a loading screen or activityindicator
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>{user ? <Tabs /> : <Auth />}</NavigationContainer>
    </QueryClientProvider>
  );
}
