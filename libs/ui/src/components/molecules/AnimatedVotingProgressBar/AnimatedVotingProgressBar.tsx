import React, { useState, useEffect } from 'react'
import { VotingProgressBar } from '../VotingProgressBar'
import { RadialScore } from '../RadialScore'

export const AnimatedVotingProgressBar = () => {
  const [score, setScore] = useState(0)

  useEffect(() => {
    // Set an interval to update the score every 100ms
    const intervalId = setInterval(() => {
      // Calculate the next score, ensuring it stays within the range of -100 to 100
      const nextScore = score + (Math.random() < 0.5 ? -1 : 1)
      if (nextScore < -100 || nextScore > 100) return

      setScore(nextScore)
    }, 100)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [score])

  return <RadialScore score={score} />
}
