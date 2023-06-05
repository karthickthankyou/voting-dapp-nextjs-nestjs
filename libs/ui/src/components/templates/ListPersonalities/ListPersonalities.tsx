import {
  PersonalityOrderByWithRelationInput,
  SortOrder,
  useOnVotedSubscription,
  usePersonalitiesLazyQuery,
  usePersonalityCreatedSubscription,
} from '@personality-voting/network/src/generated'
import { ShowData } from '../../organisms/ShowData'
import { useEffect, useState } from 'react'
import { PersonalityCard } from '../../organisms/PersonalityCard'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'
import { HtmlSelect } from '../../atoms/HtmlSelect'

export interface IListPersonalitiesProps {}

export const ListPersonalities = ({}: IListPersonalitiesProps) => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(12)
  const [searchTerm, setSearchTerm] = useState('')
  const [orderBy, setOrderBy] = useState<PersonalityOrderByWithRelationInput>({
    name: SortOrder.Asc,
  })

  const handleSort = (value: string) => {
    let [field, direction] = value.split('_')
    direction = direction === 'ASC' ? SortOrder.Asc : SortOrder.Desc
    setOrderBy({ [field]: direction })
  }

  const [fetchPersons, { data, loading, error }] = usePersonalitiesLazyQuery({
    variables: { skip, take, searchTerm, orderBy },
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
    <div>
      <div className="mb-2 text-lg font-semibold">Personalities</div>
      <div className="flex gap-2">
        <HtmlLabel title="Search">
          <HtmlInput
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </HtmlLabel>
        <SortDropdown handleSort={handleSort} />
      </div>
      <ShowData
        className="grid grid-cols-2 lg:grid-cols-3"
        error={error?.message}
        loading={loading}
        hidePagination={Boolean(searchTerm)}
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
    </div>
  )
}

export const SortDropdown = ({
  handleSort,
}: {
  handleSort: (value: string) => void
}) => (
  <HtmlLabel title="Sort">
    <HtmlSelect onChange={(e) => handleSort(e.target.value)}>
      <option value="name_ASC">A - Z</option>
      <option value="name_DESC">Z - A</option>
      <option value="upvotes_ASC">Lowest to Highest Upvotes</option>
      <option value="upvotes_DESC">Highest to Lowest Upvotes</option>
      <option value="downvotes_ASC">Lowest to Highest Downvotes</option>
      <option value="downvotes_DESC">Highest to Lowest Downvotes</option>
    </HtmlSelect>
  </HtmlLabel>
)
