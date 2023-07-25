import Link from 'next/link'
import { Container } from '../../atoms/Container'

import { NavSidebar, ShowMenuItems } from '../NavSidebar/NavSidebar'
import { Suspense } from 'react'
import { useAccount } from '@personality-voting/hooks/web3'
import { Logo } from '../../atoms/Logo'

export type MenuItem = { label: string; href: string; loggedIn?: boolean }

export type IHeaderProps = {
  menuItems?: MenuItem[]
  sideMenuItems?: MenuItem[]
}

export const Header = ({
  menuItems = [],
  sideMenuItems = [],
}: IHeaderProps) => {
  const { account } = useAccount()

  return (
    <header className="z-40">
      <nav className="fixed top-0 w-full shadow-md shadow-gray-300/10 bg-white/50 backdrop-blur-md">
        <Container className="relative z-50 flex items-center justify-between h-16 py-2">
          <div className="relative z-10 flex items-center justify-between w-full gap-16">
            <Link href="/" aria-label="Home" className="w-auto">
              <Logo />
            </Link>

            <Suspense fallback={null}>
              <ShowMenuItems menuItems={menuItems} />
            </Suspense>

            <div className="flex items-center gap-2">
              <NavSidebar menuItems={sideMenuItems} />
            </div>
          </div>
        </Container>
      </nav>
      <div className="h-16" />
    </header>
  )
}
