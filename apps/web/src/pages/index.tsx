import { useAccount } from '@personality-voting/hooks/web3'
import { CreatePersonality } from '@personality-voting/ui/src/components/templates/CreatePersonality'
import { ListPersonalities } from '@personality-voting/ui/src/components/templates/ListPersonalities'
import { Container } from '@personality-voting/ui/src/components/atoms/Container'
import { Logo } from '@personality-voting/ui/src/components/atoms/Logo'
import { AlertSection } from '@personality-voting/ui/src/components/organisms/AlertSection'
import { PlainButton } from '@personality-voting/ui/src/components/atoms/PlainButton'

export default function Home() {
  const { account, contract, isOwner } = useAccount()

  return (
    <main className="py-24 bg-gray-25 ">
      <Container>
        {account ? (
          <ListPersonalities />
        ) : (
          <AlertSection>
            <div>You need to sign in with metamask.</div>
            <PlainButton
              onClick={() => {
                window.location.reload()
              }}
            >
              Refresh.
            </PlainButton>
          </AlertSection>
        )}
      </Container>
    </main>
  )
}
