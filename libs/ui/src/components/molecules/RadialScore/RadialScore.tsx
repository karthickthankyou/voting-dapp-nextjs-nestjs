export const RadialScore = ({
  score,
  size = 10,
}: {
  score: number
  size?: number
}) => {
  const radius = (size * 0.9) / 2 // 90% of half of the size
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  const styleObject = {
    strokeDasharray: `${circumference} ${circumference}`,
    strokeDashoffset: offset,
  }

  return (
    <div className={`w-${size} h-${size}`}>
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="text-gray-100 "
          stroke="currentColor"
          strokeWidth="1"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={`${score > 0 ? 'text-green-500' : 'text-red-600'}`}
          stroke="currentColor"
          strokeWidth="1"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={styleObject}
        />{' '}
        <text x="50%" fontSize={3} y="50%" textAnchor="middle" dy=".3em">
          {score}
        </text>
      </svg>
    </div>
  )
}
