// SourceList.tsx
import React from 'react'

interface SourceListProps {
  sources: string[]
}

const SourceList: React.FC<SourceListProps> = ({ sources }) => {
  return (
    <ul className="list-disc pl-5 text-white">
      {sources.map((source, index) => (
        <li key={index} className="mb-2">
          <a href={source} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
            {source}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SourceList