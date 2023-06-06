import { Container } from '@personality-voting/ui/src/components/atoms/Container'
import { MyVotesPage } from '@personality-voting/ui/src/components/templates/MyVotesPage'

export default function Home() {
  return (
    <main className="bg-gray-25 ">
      <Container>
        <MyVotesPage />
      </Container>
    </main>
  )
}
