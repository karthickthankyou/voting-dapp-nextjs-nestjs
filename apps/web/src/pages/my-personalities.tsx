import { Container } from '@personality-voting/ui/src/components/atoms/Container'
import { MyPersonalitiesPage } from '@personality-voting/ui/src/components/templates/MyPersonalitiesPage'

export default function MyPersonalities() {
  return (
    <main className="bg-gray-25 ">
      <Container>
        <MyPersonalitiesPage />
      </Container>
    </main>
  )
}
