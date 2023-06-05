import {
  PersonalitiesQuery,
  PersonalityDocument,
  useVoteQuery,
} from '@personality-voting/network/src/generated'
import { PlainButton } from '../../atoms/PlainButton'
import { IconThumbDown, IconThumbUp } from '@tabler/icons-react'
import { downvote, upvote } from '@personality-voting/contract-utilities'
import { useAccount } from '@personality-voting/hooks/web3'
import { useAsync } from '@personality-voting/hooks/async'
import { useApolloClient } from '@apollo/client'
import { useEffect, useState } from 'react'
import { Dialog } from '../../atoms/Dialog'
import { produce } from 'immer'
import { VotingProgressBar } from '../../molecules/VotingProgressBar'
import { RadialScore } from '../../molecules/RadialScore'
import { nickNames } from './nicknames'

export type PersonalityQuery = PersonalitiesQuery['personalities'][number]

export const getNickname = (score: number): string => {
  if (score < -80) {
    return nickNames['-80'][Math.floor(Math.random() * nickNames['-80'].length)]
  } else if (score < -60) {
    return nickNames['-60'][Math.floor(Math.random() * nickNames['-60'].length)]
  } else if (score < -40) {
    return nickNames['-40'][Math.floor(Math.random() * nickNames['-40'].length)]
  } else if (score < -20) {
    return nickNames['-20'][Math.floor(Math.random() * nickNames['-20'].length)]
  } else if (score < 0) {
    return nickNames['0'][Math.floor(Math.random() * nickNames['0'].length)]
  } else if (score < 20) {
    return nickNames['20'][Math.floor(Math.random() * nickNames['20'].length)]
  } else if (score < 40) {
    return nickNames['40'][Math.floor(Math.random() * nickNames['40'].length)]
  } else if (score < 60) {
    return nickNames['60'][Math.floor(Math.random() * nickNames['60'].length)]
  } else if (score < 80) {
    return nickNames['80'][Math.floor(Math.random() * nickNames['80'].length)]
  }

  return nickNames['100'][Math.floor(Math.random() * nickNames['100'].length)]
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

export const PersonalityCard = ({ personality }: IPersonalityCardProps) => {
  const { account, contract, isOwner } = useAccount()
  const client = useApolloClient()

  const [{ loading: upvoting, data: upvoteData }, upvoteFunction] =
    useAsync(upvote)
  const [{ loading: downvoting, data: downvoteData }, downvoteFunction] =
    useAsync(downvote)

  const upvotePersonality = async () => {
    if (!contract) {
      console.error('Contract not found.')
      return
    }
    await upvoteFunction({ account, contract, name: personality.name })

    const updatedPersonality = produce(personality, (draft) => {
      draft.upvotes++
      if (draft.myVote?.vote === 1) {
        draft.downvotes
      }
      draft.myVote = { vote: 1 }
    })
    // !!! How dirty it is without immer?
    // let updatedPersonality: PersonalityQuery
    // if (personality.myVote?.vote === -1) {
    //   // if user had downvoted before, undo the downvote and add upvote
    //   updatedPersonality = {
    //     ...personality,
    //     upvotes: personality.upvotes + 1,
    //     downvotes: personality.downvotes - 1,
    //     myVote: { vote: 1 },
    //   }
    // } else {
    //   // if user hadn't voted or had upvoted before, just add upvote
    //   updatedPersonality = {
    //     ...personality,
    //     upvotes: personality.upvotes + 1,
    //     myVote: { vote: 1 },
    //   }
    // }

    client.writeQuery({
      query: PersonalityDocument,
      data: {
        personality: updatedPersonality,
      },
    })
  }

  const downvotePersonality = async () => {
    if (!contract) {
      console.error('Contract not found.')
      return
    }
    await downvoteFunction({ account, contract, name: personality.name })

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
        <div className="mb-1 font-bold ">{personality.name}</div>
        <div className="text-sm text-gray">{getNickname(score)}</div>
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
