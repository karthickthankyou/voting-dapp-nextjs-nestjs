import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { easings } from '@react-spring/web'

import { RadialScore } from '../RadialScore'

export const AnimatedVotingProgressBar = () => {
  const [score, setScore] = useState(0)
  const [targetScore, setTargetScore] = useState(0)

  const props = useSpring({
    score: targetScore,
    config: {
      duration: 3000,
      easing: easings.easeInOutSine,
    },
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTargetScore(Math.floor(Math.random() * 201) - 100)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  const AnimatedRadialScore = animated(RadialScore)

  // Round animated value before passing
  const roundedScore = props.score.to((value) => Math.round(value))

  return (
    <div className="rounded-full shadow-xl ">
      <AnimatedRadialScore
        score={roundedScore}
        strokeWidth={'4'}
        sizePercentage={0.96}
      />
    </div>
  )
}
