import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@personality-voting/network/src/config/apollo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
