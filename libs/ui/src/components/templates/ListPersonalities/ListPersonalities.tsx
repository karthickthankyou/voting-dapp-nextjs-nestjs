import {
  usePersonalitiesLazyQuery,
  usePersonalitiesQuery,
  usePersonalityCreatedSubscription,
} from '@personality-voting/network/src/generated'
import { ShowData } from '../../organisms/ShowData'
import { useEffect, useState } from 'react'
import { PlainButton } from '../../atoms/PlainButton'
import { IconRefresh } from '@tabler/icons-react'

export interface IListPersonalitiesProps {}

export const ListPersonalities = ({}: IListPersonalitiesProps) => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(12)

  console.log(skip, take)

  const [fetchPersons, { data, loading, error }] = usePersonalitiesLazyQuery({
    variables: { skip, take },
  })
  const [newPersonality, setNewPersonality] = useState(false)

  console.log(data, loading, error)
  const { data: subscriptionData } = usePersonalityCreatedSubscription()

  useEffect(() => {
    fetchPersons()
  }, [])

  useEffect(() => {
    if (subscriptionData) {
      ;(async () => {
        setNewPersonality(true)
        await fetchPersons({ fetchPolicy: 'network-only' })
        setNewPersonality(false)
      })()
    }
  }, [subscriptionData])

  return (
    <div>
      {newPersonality ? (
        <PlainButton
          onClick={() => {
            fetchPersons({ fetchPolicy: 'network-only' })
            setNewPersonality(false)
          }}
        >
          <IconRefresh />
        </PlainButton>
      ) : null}
      <ShowData
        error={error?.message}
        title="Personalities"
        loading={loading}
        pagination={{
          resultCount: data?.personalities.length || 0,
          totalCount: data?.personalitiesCount.count || 0,
          setSkip,
          setTake,
          skip,
          take,
        }}
      >
        {data?.personalities.map((person) => (
          <div key={person.id}>
            <div>{person.name}</div>
            <div>Upvotes: {person.upvotes}</div>
            <div>Downvotes: {person.downvotes}</div>
          </div>
        ))}
      </ShowData>
    </div>
  )
}
