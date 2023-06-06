import {
  PersonalityOrderByWithRelationInput,
  SortOrder,
  usePersonalitiesLazyQuery,
  usePersonalityCreatedSubscription,
} from '@personality-voting/network/src/generated'
import { ShowData } from '../../organisms/ShowData'
import { useEffect, useState } from 'react'
import { PersonalityCard } from '../../organisms/PersonalityCard'
import { HtmlSelect } from '../../atoms/HtmlSelect'
import { SearchBar } from '../../molecules/SearchBar'
import { useDebouncedValue } from '@personality-voting/hooks/async'

export interface IListPersonalitiesProps {}

export const ListPersonalities = ({}: IListPersonalitiesProps) => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(12)
  const [searchTerm, setSearchTerm] = useState('')
  const [orderBy, setOrderBy] =
    useState<PersonalityOrderByWithRelationInput | null>(null)

  const debouncedSearchTerm = useDebouncedValue(searchTerm, 400)

  const handleSort = (value: string) => {
    if (!value) {
      setOrderBy(null)
      return
    }
    let [field, direction] = value.split('_')
    direction = direction === 'ASC' ? SortOrder.Asc : SortOrder.Desc
    setOrderBy({ [field]: direction })
  }

  const [fetchPersons, { data, loading, error }] = usePersonalitiesLazyQuery({
    variables: {
      skip,
      take,
      searchTerm: debouncedSearchTerm,
      ...(orderBy ? { orderBy } : null),
    },
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
    <div className="mb-4 ">
      <div className="flex flex-col items-center max-w-lg gap-4 mx-auto mb-8 justify-stretch">
        <SearchBar
          className="w-full"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <SortDropdown handleSort={handleSort} />
      </div>
      <ShowData
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
  <HtmlSelect
    className="w-full max-w-xs rounded-full"
    onChange={(e) => handleSort(e.target.value)}
  >
    <option value="">Relevance</option>
    <option value="name_ASC">A - Z</option>
    <option value="name_DESC">Z - A</option>
    <option value="upvotes_DESC">Upvotes &darr;</option>
    <option value="upvotes_ASC">Upvotes &uarr;</option>
    <option value="downvotes_DESC">Downvotes &darr;</option>
    <option value="downvotes_ASC">Downvotes &uarr;</option>
  </HtmlSelect>
)
