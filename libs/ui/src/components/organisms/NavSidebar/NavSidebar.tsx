import { useState } from 'react'
import Link from 'next/link'
import { IconDoorExit, IconMenu2 } from '@tabler/icons-react'
import { Sidebar } from '../Sidebar'
import { Brand } from '../../atoms/Brand'
import { Button } from '../../atoms/Button'
import { MenuItem } from '../Header/Header'
import { useAccount } from '@personality-voting/hooks/web3'

export interface INavSidebarProps {
  menuItems: MenuItem[]
}

export const NavSidebar = ({ menuItems }: INavSidebarProps) => {
  const [open, setOpen] = useState(false)

  const { account } = useAccount()

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((state) => !state)}
        className="p-2"
        aria-label="Open main menu"
      >
        <IconMenu2 className="w-5 h-5" />
      </button>
      <Sidebar open={open} setOpen={setOpen}>
        <Sidebar.Header>
          <Brand shortForm />
        </Sidebar.Header>
        <Sidebar.Body>
          <div className="flex flex-col items-start space-y-1">
            {menuItems
              .filter(({ loggedIn }) => !loggedIn || account)
              .map(({ label, href }) => (
                <Link key={label} href={href}>
                  {label}
                </Link>
              ))}
            <div className="py-2" />
          </div>
        </Sidebar.Body>
      </Sidebar>
    </>
  )
}

export const ShowMenuItems = ({ menuItems }: INavSidebarProps) => {
  const { account } = useAccount()

  if (!account) return null
  return (
    <div className="items-center hidden ml-auto lg:flex lg:gap-10">
      {menuItems
        .filter(({ loggedIn }) => !loggedIn || account)
        .map(({ href, label }) => (
          <NavLink label={label} href={href} key={label} />
        ))}
    </div>
  )
}

export const NavLink = ({ label, href }: { label: string; href: string }) => (
  <Link
    key={label}
    href={href}
    className="text-sm hover:text-black hover:underline underline-offset-4"
  >
    {label}
  </Link>
)
