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

export interface IPersonalityCardProps {
  personality: PersonalitiesQuery['personalities'][number]
}

export const PersonalityCard = ({ personality }: IPersonalityCardProps) => {
  const { account, contract, isOwner } = useAccount()
  const client = useApolloClient()

  const [voteCondition, setVoteCondition] = useState<number>()

  const [{ loading: upvoting, data: upvoteData }, upvoteFunction] =
    useAsync(upvote)
  const [{ loading: downvoting, data: downvoteData }, downvoteFunction] =
    useAsync(downvote)

  const { data, loading } = useVoteQuery({
    variables: {
      where: { name_voter: { name: personality.name, voter: account } },
    },
  })

  useEffect(() => {
    if (data?.vote?.vote) {
      setVoteCondition(data.vote.vote)
    }
  }, [data?.vote?.vote])

  const upvotePersonality = async () => {
    if (!contract) {
      console.error('Contract not found.')
      return
    }
    await upvoteFunction({ account, contract, name: personality.name })

    let updatedPersonality
    if (data?.vote.vote === -1) {
      // if user had downvoted before, undo the downvote and add upvote
      updatedPersonality = {
        ...personality,
        upvotes: personality.upvotes + 1,
        downvotes: personality.downvotes - 1,
      }
    } else {
      // if user hadn't voted or had upvoted before, just add upvote
      updatedPersonality = {
        ...personality,
        upvotes: personality.upvotes + 1,
      }
    }

    setVoteCondition(1)

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

    let updatedPersonality
    if (data?.vote.vote === 1) {
      // if user had downvoted before, undo the downvote and add upvote
      updatedPersonality = {
        ...personality,
        upvotes: personality.upvotes - 1,
        downvotes: personality.downvotes + 1,
      }
    } else {
      // if user hadn't voted or had upvoted before, just add upvote
      updatedPersonality = {
        ...personality,
        downvotes: personality.upvotes + 1,
      }
    }

    setVoteCondition(-1)

    client.writeQuery({
      query: PersonalityDocument,
      data: {
        personality: updatedPersonality,
      },
    })
  }

  return (
    <div className="flex flex-col " key={personality.id}>
      <div className="font-bold">{personality.name}</div>

      <div className="flex gap-1">
        <PlainButton
          loading={upvoting}
          className="flex items-center justify-center w-12 h-12 gap-1 bg-white rounded-xl hover:shadow-lg"
          onClick={() => upvotePersonality()}
        >
          <IconThumbUp
            className={`${voteCondition === 1 ? 'fill-primary' : ''}`}
          />
          <div>{personality.upvotes}</div>
        </PlainButton>
        <PlainButton
          loading={downvoting}
          className="flex items-center justify-center w-12 h-12 gap-1 bg-white rounded-xl hover:shadow-lg"
          onClick={() => downvotePersonality()}
        >
          <IconThumbDown
            className={`${voteCondition === -1 ? 'fill-primary' : ''}`}
          />
          <div>{personality.downvotes}</div>
        </PlainButton>
      </div>
      {isOwner ? <OwnerDialog name={personality.name} /> : null}
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
