import { useAccount } from '@personality-voting/hooks/web3'
import { CreatePersonality } from '@personality-voting/ui/src/components/templates/CreatePersonality'
import { ListPersonalities } from '@personality-voting/ui/src/components/templates/ListPersonalities'
import { Container } from '@personality-voting/ui/src/components/atoms/Container'
import { Logo } from '@personality-voting/ui/src/components/atoms/Logo'

export default function Home() {
  const { account, contract, isOwner } = useAccount()

  return (
    <main className="bg-gray-25 ">
      <Container>
        <CreatePersonality />
        <ListPersonalities />
      </Container>
    </main>
  )
}
