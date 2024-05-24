import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import getRandomEmoj from "../../utils/getRandomEmoj";

function Conversations() {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="flex flex-col  gap-1 overflow-auto w-full p-1">
      {conversations.map((conversation, ind) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoj={getRandomEmoj()}
          lastIndex={ind === conversations.length - 1}
        />
      ))}
  
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
}

export default Conversations;
