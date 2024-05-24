import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { IoMdChatbubbles } from "react-icons/io";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { IoMdArrowRoundBack } from "react-icons/io";
function MessageContainer() {
  const { selectedConversation, setSelectedConversation, setOpenChat } =
    useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className={` w-full sm:w-full  flex-col  p-1  sm:flex `}>
      {selectedConversation ? (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2 rounded-full relative ">
            <span className="label-text ">
              To:
              <span className="text-gray-900 font-bold ml-1">
                {selectedConversation?.fullName}
              </span>
            </span>
            <span
              className="absolute right-2 text-center"
              onClick={() => setOpenChat(false)}
            >
              <IoMdArrowRoundBack />
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="  sm:flex items-center justify-center w-full h-full  hidden ">
      <div className="px-4 text-center sm:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋{authUser?.fullName} </p>
        <p>Select a chat to start messaging</p>
        <IoMdChatbubbles className="md:text-[50px] text-white" />
      </div>
    </div>
  );
};
