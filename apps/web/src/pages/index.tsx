import { useAccount } from '@/hooks/web3'
import { CreatePersonality } from '@personality-voting/ui/src/components/templates/CreatePersonality'
import { ListPersonalities } from '@personality-voting/ui/src/components/templates/ListPersonalities'

export default function Home() {
  const { account, contract } = useAccount()

  return (
    <main className="flex flex-col items-start gap-6 ">
      <CreatePersonality />
      <ListPersonalities />
      <button
        onClick={async () => {
          try {
            // Check if the personality exists using call
            const personality = await contract?.methods
              .personalities('DONALD TRUMP 2')
              .call()

            // Check the length of the personality name to verify its existence
            if (personality.name) {
              alert('Personality already exists!')
              return
            }

            // If the personality doesn't exist, then create it using send
            await contract?.methods
              .createPersonality('DONALD TRUMP 2')
              .send({ from: account })
          } catch (error) {
            console.error(error)
          }
        }}
      >
        create personality
      </button>
      <button
        onClick={async () => {
          try {
            const currentVote = await contract?.methods
              .votes(account, 'DONALD TRUMP 2')
              .call()
            if (currentVote === '1') {
              alert('You have already upvoted this personality')
            } else {
              await contract?.methods
                .upvote('DONALD TRUMP 2')
                .send({ from: account })
            }
          } catch (err) {
            console.error(err)
          }
        }}
      >
        Upvote
      </button>
      <button
        onClick={async () => {
          try {
            const currentVote = await contract?.methods
              .votes(account, 'DONALD TRUMP 2')
              .call()
            if (currentVote === '-1') {
              alert('You have already downvoted this personality')
            } else {
              await contract?.methods
                .downvote('DONALD TRUMP 2')
                .send({ from: account })
            }
          } catch (err) {
            console.error(err)
          }
        }}
      >
        Downvote
      </button>
      <button
        onClick={async () => {
          try {
            // First check if the account requesting is the owner of the contract
            const contractOwner = await contract?.methods.owner().call()
            console.log('contractOwner ', contractOwner)
            if (account !== contractOwner) {
              alert(
                'You are not the owner of the contract and cannot remove a personality!',
              )
              return
            }

            // If the requester is the owner, proceed with the removal
            await contract?.methods
              .removePersonality('DONALD TRUMP 2')
              .send({ from: account })
            alert('Personality successfully removed!')
          } catch (error) {
            console.error(error)
          }
        }}
      >
        Remove Personality
      </button>
    </main>
  )
}
