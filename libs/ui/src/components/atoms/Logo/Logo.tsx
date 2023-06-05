import { AnimatedVotingProgressBar } from '../../molecules/AnimatedVotingProgressBar'

export interface ILogoProps {}

export const Logo = ({}: ILogoProps) => {
  return (
    <div className="relative flex items-center gap-2 py-4">
      <div
        // style={{
        //   backgroundImage:
        //     'linear-gradient(to right, hsl(10, 94%, 45%), hsl(30, 100%, 50%), hsl(116, 2%, 32%),hsl(52, 100%, 50%),hsl(116, 100%, 54%),hsl(116, 100%, 27%) )',
        //   backgroundClip: 'text',
        //   WebkitBackgroundClip: 'text',
        //   color: 'transparent',
        //   WebkitTextFillColor: 'transparent',
        // }}
        // className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red via-gray-50 to-green"
        className="z-10 text-xl font-bold "
      >
        Personalities
      </div>
      <div className="absolute px-1 mb-4 text-xs font-semibold text-black border border-white rounded shadow-lg bg-white/30 backdrop-blur-sm left-full">
        Web3
      </div>
      <div className="absolute left-0 w-12 h-12 -translate-x-1/2 -z-10">
        <AnimatedVotingProgressBar />
      </div>
    </div>
  )
}
