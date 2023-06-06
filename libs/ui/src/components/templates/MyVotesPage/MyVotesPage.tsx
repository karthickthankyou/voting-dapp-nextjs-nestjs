import { useAccount } from '@personality-voting/hooks/web3'
import { useVotesQuery } from '@personality-voting/network/src/generated'
import { ShowData } from '../../organisms/ShowData'
import { useState } from 'react'
import { PersonalityCard } from '../../organisms/PersonalityCard'

export interface IMyVotesPageProps {}

export const MyVotesPage = ({}: IMyVotesPageProps) => {
  const [take, setTake] = useState(12)
  const [skip, setSkip] = useState(0)
  const { account, contract, isOwner } = useAccount()
  const { data, loading } = useVotesQuery({
    variables: { take, skip, where: { voter: { equals: account } } },
  })
  return (
    <div className="pt-6">
      <div>My votes</div>
      <ShowData
        loading={loading}
        pagination={{
          skip,
          take,
          resultCount: data?.votes.length,
          totalCount: data?.votesCount.count,
          setSkip,
          setTake,
        }}
      >
        {data?.votes.map((vote) => {
          return vote.personality ? (
            <PersonalityCard key={vote.id} personality={vote.personality} />
          ) : null
        })}
      </ShowData>
    </div>
  )
}
