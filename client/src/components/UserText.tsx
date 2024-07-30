import React from "react";
import { UserTextProps } from "../utils/types";

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