import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessage from "../../hooks/useListenMessage";

function Messages() {
  const { loading, messages } = useGetMessages();
  useListenMessage();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  
  return (
    <div className=" p-4 flex  flex-col overflow-auto h-full">
      {loading && [...Array(3)].map((_, ind) => <MessageSkeleton key={ind} />)}
      {!loading &&
        messages.length !== 0 &&
        messages.map((message, ind) => (
          <div key={ind} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, ind) => <MessageSkeleton key={ind} />)}
      {!loading && messages.length < 1 && (
        <div className="h-full  w-full flex items-center justify-center">
          <h1 className="  text-center text-[20px] font-semibold ">
            send a message to start a conversation
          </h1>
        </div>
      )}
    </div>
  );
}

export default Messages;
