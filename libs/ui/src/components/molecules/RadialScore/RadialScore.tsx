export const RadialScore = ({
  score,
  strokeWidth = '1',
  sizePercentage = 0.99,
  baseCircleClasses = 'text-gray-50',
}: {
  score: number
  strokeWidth?: string
  sizePercentage?: number
  baseCircleClasses?: string
}) => {
  const size = 100 // Control the size of SVG elements
  const radius = (size * sizePercentage) / 2 // 98% of half of the size
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  const styleObject = {
    strokeDasharray: `${circumference} ${circumference}`,
    strokeDashoffset: offset,
  }

  return (
    <div className="w-full h-full">
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          <circle
            className={baseCircleClasses}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className={`${score > 0 ? 'text-green-500' : 'text-red-600'}`}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={styleObject}
          />
        </g>
      </svg>
    </div>
  )
}
