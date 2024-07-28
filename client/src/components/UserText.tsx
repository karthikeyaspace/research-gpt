import React from "react";

interface UserTextProps {
  message: string;
}

const UserText: React.FC<UserTextProps> = ({ message }) => {
  return (
    <div className="mb-4 mt-8 flex justify-end">
      <div className="inline-block p-3 bg-secondary/10 rounded-lg">
        <p className="text-white">{message}</p>
      </div>
    </div>
  );
};

export default UserText;