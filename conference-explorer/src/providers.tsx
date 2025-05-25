/*
DEV NOTES:
 - This wrapper will allow apollo graphQL client to get passed down to all components.
  Without the need to pass it manually.
*/

'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apollo-client';

export function ApolloProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
