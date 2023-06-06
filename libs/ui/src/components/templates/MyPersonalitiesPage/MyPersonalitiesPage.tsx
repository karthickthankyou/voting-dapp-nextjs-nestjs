import { useAccount } from '@personality-voting/hooks/web3'
import { usePersonalitiesQuery } from '@personality-voting/network/src/generated'
import { ShowData } from '../../organisms/ShowData'
import { useState } from 'react'
import { PersonalityCard } from '../../organisms/PersonalityCard'
import { PageTitle } from '../../atoms/PageTitle'

export interface IMyPersonalitiesPageProps {}

export const MyPersonalitiesPage = ({}: IMyPersonalitiesPageProps) => {
  const [take, setTake] = useState(12)
  const [skip, setSkip] = useState(0)
  const { account } = useAccount()
  const { data, loading } = usePersonalitiesQuery({
    variables: { where: { creator: { equals: account } } },
  })
  return (
    <div>
      <PageTitle>My personalities</PageTitle>
      <ShowData
        loading={loading}
        pagination={{
          skip,
          take,
          resultCount: data?.personalities.length,
          totalCount: data?.personalitiesCount.count,
          setSkip,
          setTake,
        }}
      >
        {data?.personalities.map((personality) => (
          <PersonalityCard key={personality.id} personality={personality} />
        ))}
      </ShowData>
    </div>
  )
}
