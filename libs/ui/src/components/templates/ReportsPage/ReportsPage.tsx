import { useGroupByPersonalitiesQuery } from '@personality-voting/network/src/generated'
import { useState } from 'react'
import { ShowData } from '../../organisms/ShowData'
import { PersonalityCard } from '../../organisms/PersonalityCard'

export const ReportsPage = () => {
  const [take, setTake] = useState(12)
  const [skip, setSkip] = useState(0)
  const { data, loading } = useGroupByPersonalitiesQuery({
    variables: { skip, take },
  })
  return (
    <ShowData
      loading={loading}
      pagination={{
        skip,
        take,
        resultCount: data?.groupByPersonalities.length,
        totalCount: data?.groupByPersonalitiesCount.count,
        setSkip,
        setTake,
      }}
    >
      {data?.groupByPersonalities.map((report) => {
        return report.personality ? (
          <div>
            <PersonalityCard
              key={report.personalityId}
              personality={report.personality}
            />
            <div className="mt-1 font-semibold text-center underline underline-offset-4">
              Reported {report._count} time(s)
            </div>
          </div>
        ) : null
      })}
    </ShowData>
  )
}
