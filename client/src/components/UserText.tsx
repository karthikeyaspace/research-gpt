  import { forwardRef } from "react";
import { UserTextProps } from "../utils/types";

const UserText = forwardRef<HTMLDivElement, UserTextProps>(({ payload, isLatest }, ref) => {
  return (
    <div className="mb-4 mt-8 flex justify-end" ref={isLatest ? ref : null}>
      <div className="inline-block px-3 py-[6px] bg-secondary/40 rounded-lg text">
        <p className="text-secondary whitespace-pre-wrap">{payload.message}</p>
      </div>
    </div>
  );
});

UserText.displayName = "UserText";

export default UserText;