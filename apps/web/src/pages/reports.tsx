import { Container } from '@personality-voting/ui/src/components/atoms/Container'
import { PageTitle } from '@personality-voting/ui/src/components/atoms/PageTitle'
import { ReportsPage } from '@personality-voting/ui/src/components/templates/ReportsPage'

export default function Home() {
  return (
    <main className="bg-gray-25 ">
      <Container>
        <PageTitle>Reports</PageTitle>
        <ReportsPage />
      </Container>
    </main>
  )
}
