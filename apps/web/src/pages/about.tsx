import { AboutPage } from '@personality-voting/ui/src/components/templates/AboutPage'
import { Container } from '@personality-voting/ui/src/components/atoms/Container'
import { PageTitle } from '@personality-voting/ui/src/components/atoms/PageTitle'

export default function Home() {
  return (
    <main className="h-full min-h-[calc(100vh-4rem)] bg-gray-25">
      <Container>
        <PageTitle>About</PageTitle>
        <AboutPage />
      </Container>
    </main>
  )
}
