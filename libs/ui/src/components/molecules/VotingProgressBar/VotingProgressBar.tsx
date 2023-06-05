import { RadialScore } from '../RadialScore'

// Function to calculate percentage
const calculatePercentage = (upvotes: number, downvotes: number): number => {
  if (upvotes === 0 && downvotes === 0) return 0

  const totalVotes = upvotes + downvotes
  const netVotes = upvotes - downvotes
  return Math.round((netVotes / totalVotes) * 100)
}
// Function to select color based on percentage
const selectColor = (percentage: number) => {
  if (percentage <= -60) return 'bg-red-500 text-white'
  else if (percentage <= -20) return 'bg-orange-500'
  else if (percentage <= 20) return 'bg-gray-300'
  else if (percentage <= 40) return 'bg-yellow-500'
  else if (percentage <= 80) return 'bg-green-300'
  else return 'bg-green-600 text-white'
}

export const VotingProgressBar = ({
  upvotes,
  downvotes,
  score,
}: {
  upvotes?: number
  downvotes?: number
  score?: number
}) => {
  const upvotePercentage =
    score || calculatePercentage(upvotes || 0, downvotes || 0)

  return <RadialScore score={upvotePercentage} />
}
