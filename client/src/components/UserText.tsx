// UserText.tsx
import React from 'react'

interface UserTextProps {
  message: string
}

const UserText: React.FC<UserTextProps> = ({ message }) => {
  return (
    <div className="mb-4">
      <div className="flex items-end">
        <div className="flex-grow">
          <p className="text-white">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default UserText