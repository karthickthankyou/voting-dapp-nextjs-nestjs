import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@personality-voting/network/src/config/apollo'
import { Logo } from '@personality-voting/ui/src/components/atoms/Logo'
import { Container } from '@personality-voting/ui/src/components/atoms/Container'
import { CreatePersonality } from '@personality-voting/ui/src/components/templates/CreatePersonality'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider>
      <Container className="my-2">
        <div className="flex justify-between gap-2">
          <Logo />
          <CreatePersonality />
        </div>
      </Container>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
