import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import useSendMessage from "../../hooks/useSendMessage";
import toast from "react-hot-toast";

function MessageInput() {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  //this method handle the send message
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!message) {
      toast.error("Enter somethong!!");
      return;
    }
    await sendMessage(message);
    setMessage("")
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 my-3 w-full">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit "
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <RiSendPlaneFill />
          )}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
