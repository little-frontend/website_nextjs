import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

import createApolloClient from '../apollo';

const client = createApolloClient();

function MyApp({ Component, pageProps}: AppProps) {
  
  return <ApolloProvider client={client}>
     <Component {...pageProps} />
  </ApolloProvider>
}

export default MyApp
