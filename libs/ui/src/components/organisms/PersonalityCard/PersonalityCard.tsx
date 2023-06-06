import {
  PersonalitiesQuery,
  PersonalityDocument,
  useCreateReportMutation,
  useReportQuery,
} from '@personality-voting/network/src/generated'
import { PlainButton } from '../../atoms/PlainButton'
import { IconFlag, IconThumbDown, IconThumbUp } from '@tabler/icons-react'
import { downvote, upvote } from '@personality-voting/contract-utilities'
import { useAccount } from '@personality-voting/hooks/web3'
import { useAsync } from '@personality-voting/hooks/async'
import { useApolloClient } from '@apollo/client'
import { memo, useEffect, useState } from 'react'
import { Dialog } from '../../atoms/Dialog'
import { produce } from 'immer'
import { VotingProgressBar } from '../../molecules/VotingProgressBar'
import { RadialScore } from '../../molecules/RadialScore'
import { descriptions, nickNames } from './nicknames'
import Link from 'next/link'
import { format } from 'date-fns'

export type PersonalityQuery = PersonalitiesQuery['personalities'][number]

export const pickRandom = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)]

export const getNickname = (score: number, totalVotes = 0): string => {
  if (totalVotes === 0) {
    return pickRandom(nickNames['noVotes'])
  }
  if (score < -80) {
    return pickRandom(nickNames['-80'])
  } else if (score < -60) {
    return pickRandom(nickNames['-60'])
  } else if (score < -40) {
    return pickRandom(nickNames['-40'])
  } else if (score < -20) {
    return pickRandom(nickNames['-20'])
  } else if (score < 0) {
    return pickRandom(nickNames['0'])
  } else if (score < 20) {
    return pickRandom(nickNames['20'])
  } else if (score < 40) {
    return pickRandom(nickNames['40'])
  } else if (score < 60) {
    return pickRandom(nickNames['60'])
  } else if (score < 80) {
    return pickRandom(nickNames['80'])
  }

  return pickRandom(nickNames['100'])
}
export const getDescription = (score: number, totalVotes = 0): string => {
  if (totalVotes === 0) {
    return pickRandom(descriptions['noVotes'])
  }
  if (score < -80) {
    return pickRandom(descriptions['-80'])
  } else if (score < -60) {
    return pickRandom(descriptions['-60'])
  } else if (score < -40) {
    return pickRandom(descriptions['-40'])
  } else if (score < -20) {
    return pickRandom(descriptions['-20'])
  } else if (score < 0) {
    return pickRandom(descriptions['0'])
  } else if (score < 20) {
    return pickRandom(descriptions['20'])
  } else if (score < 40) {
    return pickRandom(descriptions['40'])
  } else if (score < 60) {
    return pickRandom(descriptions['60'])
  } else if (score < 80) {
    return pickRandom(descriptions['80'])
  }

  return pickRandom(nickNames['100'])
}
export interface IPersonalityCardProps {
  personality: PersonalityQuery
}

const calculatePercentage = (upvotes: number, downvotes: number): number => {
  if (upvotes === 0 && downvotes === 0) return 0

  const totalVotes = upvotes + downvotes
  const netVotes = upvotes - downvotes
  return Math.round((netVotes / totalVotes) * 100)
}

export const PersonalityCard = memo(
  ({ personality }: IPersonalityCardProps) => {
    const { account, contract, isOwner } = useAccount()
    const client = useApolloClient()

    const [
      { loading: upvoting, data: upvoteData, error: upvoteError },
      upvoteFunction,
    ] = useAsync(upvote, () => {
      const updatedPersonality = produce(personality, (draft) => {
        draft.upvotes++
        if (draft.myVote?.vote === 1) {
          draft.downvotes
        }
        draft.myVote = { vote: 1 }
      })

      client.writeQuery({
        query: PersonalityDocument,
        data: {
          personality: updatedPersonality,
        },
      })
    })
    const [{ loading: downvoting, data: downvoteData }, downvoteFunction] =
      useAsync(downvote, () => {
        const updatedPersonality = produce(personality, (draft) => {
          draft.downvotes++
          if (draft.myVote?.vote === 1) {
            draft.upvotes--
          }
          draft.myVote = { vote: -1 }
        })

        client.writeQuery({
          query: PersonalityDocument,
          data: {
            personality: updatedPersonality,
          },
        })
      })

    console.log('Come on', upvoteData, upvoteError)

    const upvotePersonality = async () => {
      if (!contract) {
        console.error('Contract not found.')
        return
      }
      await upvoteFunction({
        account,
        contract,
        name: personality.name,
      })
    }

    const downvotePersonality = async () => {
      if (!contract) {
        console.error('Contract not found.')
        return
      }
      await downvoteFunction({ account, contract, name: personality.name })
    }

    const score = calculatePercentage(
      personality.upvotes || 0,
      personality.downvotes || 0,
    )
    return (
      <div>
        <div
          className="flex flex-col items-center gap-1 bg-white rounded-full "
          key={personality.id}
        >
          <div className="flex justify-center w-full ">
            <div className="relative w-full h-full">
              <RadialScore
                score={score}
                strokeWidth="1.2"
                baseCircleClasses="text-white"
              />
              <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-2 ">
                <div className="text-4xl font-thin">{score}</div>
              </div>
              <div className="absolute top-0 left-0 flex flex-col items-center justify-end w-full h-full gap-2 pb-6 ">
                <div className="flex gap-2">
                  <PlainButton
                    loading={upvoting}
                    className="flex items-center justify-center gap-1 bg-white rounded-xl "
                    onClick={() => upvotePersonality()}
                  >
                    <IconThumbUp
                      className={`stroke-gray-500 stroke-1 ${
                        personality.myVote?.vote === 1 ? 'fill-gray-200  ' : ''
                      }`}
                    />
                    <div className="font-light">{personality.upvotes}</div>
                  </PlainButton>
                  <PlainButton
                    loading={downvoting}
                    className="flex items-center justify-center gap-1 bg-white rounded-xl "
                    onClick={() => downvotePersonality()}
                  >
                    <IconThumbDown
                      className={`stroke-gray-500 stroke-1 ${
                        personality.myVote?.vote === -1 ? 'fill-gray-200  ' : ''
                      }`}
                    />
                    <div className="font-light">{personality.downvotes}</div>
                  </PlainButton>
                </div>
              </div>
            </div>
          </div>
          {isOwner ? <OwnerDialog name={personality.name} /> : null}
        </div>
        <div className="mt-2 text-center">
          <div className="flex items-center justify-center gap-2 mb-1 font-bold">
            {personality.name} <ReportDialog personality={personality} />
          </div>
          <div className="mb-1 text-sm font-medium ">
            {getNickname(score, personality.downvotes + personality.upvotes)}
          </div>
          <div className="text-sm text-gray">
            {getDescription(score, personality.downvotes + personality.upvotes)}
          </div>
        </div>
      </div>
    )
  },
)

export const ReportDialog = ({
  personality,
}: {
  personality: PersonalityQuery
}) => {
  const [open, setOpen] = useState(false)
  const { account, contract } = useAccount()
  const { data } = useReportQuery({
    variables: {
      where: {
        reporter_personalityId: {
          personalityId: personality.id,
          reporter: account,
        },
      },
    },
  })

  return (
    <>
      <PlainButton onClick={() => setOpen(true)}>
        <IconFlag className="p-1" />
      </PlainButton>
      <Dialog
        open={open}
        setOpen={setOpen}
        title={`Remove ${personality.name}?`}
      >
        {data?.report ? (
          <div>
            You have already reported this entry on{' '}
            {format(new Date(data.report.createdAt), 'PPp')}.
            <div>
              See all{' '}
              <Link
                className="font-semibold underline underline-offset-4"
                href="/reports"
              >
                Reports
              </Link>{' '}
            </div>
          </div>
        ) : (
          <ReportDialogContent
            personality={personality}
            close={() => setOpen(false)}
          />
        )}
      </Dialog>
    </>
  )
}

export const ReportDialogContent = ({
  personality,
  close,
}: {
  personality: PersonalityQuery
  close: Function
}) => {
  const [createReport, { data, loading }] = useCreateReportMutation()

  return data?.createReport ? (
    <div>
      Your request has been submitted.{' '}
      <Link
        href="/reports"
        className="font-semibold underline underline-offset-4"
      >
        Go to all reports
      </Link>
    </div>
  ) : (
    <div>
      <div>Hey are you not happy with the {personality.name} name? </div>
      <div>
        We will remove this entry from the system if more people reports it.
      </div>
      <div className="flex gap-1 mt-2">
        <PlainButton className="w-full" onClick={() => close()}>
          Cancel
        </PlainButton>
        <PlainButton
          onClick={async () => {
            await createReport({
              variables: {
                createReportInput: { personalityId: personality.id },
              },
            })
          }}
          className="w-full font-semibold underline underline-offset-4"
          loading={loading}
        >
          Report personality
        </PlainButton>
      </div>
    </div>
  )
}

export const OwnerDialog = ({ name }: { name: string }) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { account, contract, isOwner } = useAccount()
  return (
    <>
      <PlainButton onClick={() => setOpen(true)}>Owner</PlainButton>
      <Dialog open={open} setOpen={setOpen} title={'Owners'}>
        <PlainButton
          loading={loading}
          onClick={async () => {
            try {
              if (!isOwner) {
                alert(
                  'You are not the owner of the contract and cannot remove a personality!',
                )
                return
              }
              setLoading(true)
              // If the requester is the owner, proceed with the removal
              await contract?.methods
                .removePersonality(name)
                .send({ from: account })
              setLoading(false)
              alert('Personality successfully removed!')
            } catch (error) {
              console.error(error)
            }
          }}
        >
          Remove Personality
        </PlainButton>
      </Dialog>
    </>
  )
}
