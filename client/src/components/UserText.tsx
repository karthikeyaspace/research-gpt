import React from "react";

interface UserTextProps {
  payload: {
    message: string;
    keywords: string[];
    follow_up_questions: string[];
  }
}

const UserText: React.FC<UserTextProps> = ({ payload }) => {
  return (
    <div className="mb-4 mt-8 flex justify-end">
      <div className="inline-block p-3 bg-secondary/10 rounded-lg text">
        <p className="text-white whitespace-pre-wrap">{payload.message}</p>
      </div>
    </div>
  );
};

export default UserText;