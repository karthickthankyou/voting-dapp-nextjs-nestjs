import { AnimatedVotingProgressBar } from '../../molecules/AnimatedVotingProgressBar'

export interface ILogoProps {}

export const Logo = ({}: ILogoProps) => {
  return (
    <div className="flex items-center gap-2 ">
      <AnimatedVotingProgressBar />
      <div
        // style={{
        //   backgroundImage:
        //     'linear-gradient(to right, hsl(10, 94%, 45%), hsl(30, 100%, 50%), hsl(116, 2%, 32%),hsl(52, 100%, 50%),hsl(116, 100%, 54%),hsl(116, 100%, 27%) )',
        //   backgroundClip: 'text',
        //   WebkitBackgroundClip: 'text',
        //   color: 'transparent',
        //   WebkitTextFillColor: 'transparent',
        // }}
        className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red via-gray-50 to-green"
      >
        Personalities
      </div>
    </div>
  )
}
