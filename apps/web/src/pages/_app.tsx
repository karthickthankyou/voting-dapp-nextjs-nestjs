import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@personality-voting/network/src/config/apollo'
import { Header } from '@personality-voting/ui/src/components/organisms/Header'
import { Footer } from '@personality-voting/ui/src/components/organisms/Footer'
import { MenuItem } from '@personality-voting/ui/src/components/organisms/Header/Header'

const MENUITEMS: MenuItem[] = [
  { label: 'My votes', href: '/my-votes', loggedIn: true },
  { label: 'Manage personalities', href: '/my-personalities', loggedIn: true },
  { label: 'About', href: '/about' },
]
const SUBMENUITEMS: MenuItem[] = [
  ...MENUITEMS,
  { label: 'Reports', href: '/reports', loggedIn: true },
  { label: 'Settings', href: '/settings', loggedIn: false },
]

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider>
      <Header menuItems={MENUITEMS} sideMenuItems={SUBMENUITEMS} />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}
