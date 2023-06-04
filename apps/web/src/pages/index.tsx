import { useAccount } from '@/hooks/web3'

export default function Home() {
  const { account, contract } = useAccount()
  return (
    <main className="flex gap-3">
      <button
        onClick={async () => {
          await contract?.methods
            .createPersonality('DONALD TRUMP 8')
            .send({ from: account })
        }}
      >
        create personality
      </button>
      <button
        onClick={async () => {
          try {
            const currentVote = await contract?.methods
              .votes(account, 'DONALD TRUMP 8')
              .call()
            if (currentVote === '1') {
              alert('You have already upvoted this personality')
            } else {
              await contract?.methods
                .upvote('DONALD TRUMP 8')
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
              .votes(account, 'DONALD TRUMP 8')
              .call()
            if (currentVote === '-1') {
              alert('You have already downvoted this personality')
            } else {
              await contract?.methods
                .downvote('DONALD TRUMP 8')
                .send({ from: account })
            }
          } catch (err) {
            console.error(err)
          }
        }}
      >
        Downvote
      </button>
    </main>
  )
}
