import { IconSearch } from '@tabler/icons-react'
import { useState } from 'react'

export interface ISearchBarProps {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  className?: string
}

export const SearchBar = ({
  searchTerm,
  setSearchTerm,
  className,
}: ISearchBarProps) => {
  const placeholders = [
    'Search for a person to roast or toast...',
    'Judge your friends, enemies, or frenemies here...',
    "Who's the lucky person today?",
    'Enter the name of your future favorite...',
    'Looking for someone to adore or abhor?',
    'Whose day are we making or breaking?',
    'Type a name and let the judgment begin...',
    'Unleash your inner critic here...',
    "Who's next on your personal hot-or-not list?",
    'Who do you want to love or loathe today?',
  ]

  const placeholder =
    placeholders[Math.floor(Math.random() * placeholders.length)]

  return (
    <div
      className={`flex items-center border rounded-full bg-white shadow-lg p-1 border-gray-600 ${className}`}
    >
      <IconSearch className="w-6 h-6 ml-2 text-gray-600" />
      <input
        className="w-full py-2 pl-2 text-lg leading-tight text-gray-700 bg-transparent outline-none focus:ring-0"
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        placeholder={placeholder}
      />
    </div>
  )
}
