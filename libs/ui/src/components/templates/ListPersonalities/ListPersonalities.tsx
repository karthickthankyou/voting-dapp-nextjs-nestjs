import {
  usePersonalitiesLazyQuery,
  usePersonalityCreatedSubscription,
} from '@personality-voting/network/src/generated'
import { ShowData } from '../../organisms/ShowData'
import { useEffect, useState } from 'react'
import { PersonalityCard } from '../../organisms/PersonalityCard'

export interface IListPersonalitiesProps {}

export const ListPersonalities = ({}: IListPersonalitiesProps) => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(12)

  const [fetchPersons, { data, loading, error }] = usePersonalitiesLazyQuery({
    variables: { skip, take },
  })

  const { data: subscriptionData } = usePersonalityCreatedSubscription()

  useEffect(() => {
    fetchPersons()
  }, [])

  useEffect(() => {
    if (subscriptionData) {
      ;(async () => {
        await fetchPersons({ fetchPolicy: 'network-only' })
      })()
    }
  }, [subscriptionData])

  return (
    <ShowData
      className="grid grid-cols-2 lg:grid-cols-3"
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
      {data?.personalities.map((personality) => (
        <PersonalityCard key={personality.id} personality={personality} />
      ))}
    </ShowData>
  )
}
