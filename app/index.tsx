import React from 'react';
import { SearchScreen } from '@/screens/search/SearchScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchScreen />
    </QueryClientProvider>
  );
}
