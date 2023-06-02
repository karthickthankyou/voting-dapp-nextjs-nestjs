import { useAccount } from '@/hooks/web3'

export default function Home() {
  const { account, contract } = useAccount()
  return (
    <main className="flex gap-3">
      <button
        onClick={async () => {
          await contract?.methods
            .createPersonality('DONALD TRUMP')
            .send({ from: account })
        }}
      >
        create personality
      </button>
      <button
        onClick={async () => {
          await contract?.methods.upvote('DONALD TRUMP').send({ from: account })
        }}
      >
        Upvote
      </button>
      <button
        onClick={async () => {
          await contract?.methods
            .downvote('DONALD TRUMP')
            .send({ from: account })
        }}
      >
        Downvote
      </button>
    </main>
  )
}
