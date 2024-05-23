import React from "react";

function MessageSkeleton() {
  return (
    <>
     <div className=" chat chat-start flex flex-col  gap-1 w-full">
        <div className="skeleton h-10 w-40"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
      <div className=" chat chat-end flex flex-col  gap-1 w-full">
        <div className="skeleton h-10 w-40"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
    </>
  );
}

export default MessageSkeleton;
